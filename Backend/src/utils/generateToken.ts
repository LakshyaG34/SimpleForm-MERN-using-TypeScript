import jwt from "jsonwebtoken"
import express, {Response} from "express"
import { JWT_SECRET } from "../config";

const generateTokenSetCookie = (userId: string, res: Response) =>{
    const token = jwt.sign({userId}, JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly:true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenSetCookie;

