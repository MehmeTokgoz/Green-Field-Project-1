import jwt from "jsonwebtoken";
import createError from "./createError.js";



export default (req, res, next) => {
//Get the provided token:
    const token = req.cookies.access_token;
//Check the token is valid or not:
    if (!token) {
        return next(createError({ status: 401, message: "Unauthorized" }));
    }
    return jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return next(createError({ status: 401, message: "Invalid Token" }));
        } else {
            req.user = decoded;
            return next();
        }
    });
};
