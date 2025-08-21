import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET: string = process.env.JWT_SECRET as string;
export const MONGO_URI: string = process.env.MONGO_URI as string;