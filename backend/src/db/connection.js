import mongoose from "mongoose";
import { DB_Name } from "../constants.js"

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection FAILED", error);
        process.exit(1);
    }
};

export default connectDB;