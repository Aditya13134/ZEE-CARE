import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
export const dbConnection = () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is not defined in the environment variables.");
        return;
    }
    
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connection successful!");
        })
        .catch((err) => {
            console.error("Database connection error:", err.message);
            console.error("Check your connection string and network settings.");
        });
};