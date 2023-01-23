import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";



export const signUp = async (req, res, next) => {
//Checking the required fields before creating the user:
    if (!req.body.name || !req.body.email || !req.body.password) {
        return next(
            createError({
                status: 400,
                message: "Name, email and password are required.",
            })
        );
    }
// Hashing password:
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
//Saving hashed password to database:
        await newUser.save();
        return res.status(201).json("New User Created.");
    } catch (error) {
        console.log(error);
        return next(error);
    }
};


export const signIn = async (req, res, next) => {
// Checking the required fields before sign in
    if (!req.body.email || !req.body.password) {
        return next(
            createError({
                status: 400,
                message: "Email and password are required.",
            })
        );
    }

    try {
//Get the user whose email is provided email. And from that user get back name, email, password 
        const user = await User.findOne({ email: req.body.email }).select(
            "name email password"
        );
//Check the user exists or not:
        if (!user) {
            return next(
                createError({ status: 404, message: "User not found." })
            );
        }
//Check the password if the user exists:
        const isPasswordCorrect = await bcryptjs.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            return next(
                createError({ status: 400, message: "Wrong password." })
            );
        }
//Create a cookie and token if the password is correct
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

//Creating sign out functionality and clearing cookies when user signs out 
export const signOut = (req, res) => {
    res.clearCookie("access_token");
    return res.status(200).json({ message: "Logout Successful." });
};

// Check the status, is the user logged in or not:
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