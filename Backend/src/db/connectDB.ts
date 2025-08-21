import dotenv from "dotenv"
dotenv.config();

import mongoose from "mongoose";
import { MONGO_URI } from "../config";


const connectDB = async() : Promise<void> =>
{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Connected to Database")
    }catch(error)
    {
        console.log("Cannot connect to Database", error);
    }
}

export default connectDB;