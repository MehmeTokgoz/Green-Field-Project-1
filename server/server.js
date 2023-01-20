import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import morgan from "morgan";
import cookieParser from "cookie-parser";


const PORT = process.env.PORT || 8000;
const app = express();


mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB.");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});