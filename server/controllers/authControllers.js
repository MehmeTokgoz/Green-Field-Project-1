import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const signUp = async (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return next(
            createError({
                status: 400,
                message: "Name, email and password are required.",
            })
        );
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        await newUser.save();
        return res.status(201).json("New User Created.");
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

export const signIn = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return next(
            createError({
                status: 400,
                message: "Email and password are required.",
            })
        );
    }
    try {
        const user = await User.findOne({ email: req.body.email }).select(
            "name email password"
        );
        if (!user) {
            return next(
                createError({ status: 404, message: "User not found." })
            );
        }
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            return next(
                createError({ status: 400, message: "Wrong password." })
            );
        }
        const payload = {
            id: user._id,
            name: user.name,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        return res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ message: "Login Successful." });
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

export const signOut = (req, res) => {
    res.clearCookie("access_token");
    return res.status(200).json({ message: "Logout Successful." });
};

export const status = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.json(false);
    };
    return jwt.verify(token, process.env.JWT_SECRET, (error) => {
        if (error) {
            return res.json(false);
        };
        return res.json(true);
    });
};