import User from "../models/User.js";

//Get user information 
export const getUserInfo = async (req, res, next) => {
    console.log(req.user.id);
    try {
        const data = await User.findById(req.user.id).select("name email");
        return res.status(200).json(data);
    } catch (error) {
        return next(error);
    }
};

