import User from "../models/user.model"
import express, {Request, Response} from "express"
import bcrypt from "bcryptjs"
import generateTokenSetCookie from "../utils/generateToken";
import { UserTypes } from "../types/user.types";

export const signup = async(req: Request, res: Response) : Promise<Response | void> =>{
    try{
        const {name, email, password, confirmPassword} = req.body as UserTypes;
        if(!name || !email || !password || !confirmPassword)
        {
            // throw new Error("Missing fields");
            // return new Response(JSON.stringify((Error: "User already exists")),{
            //     status: 400,
            // });
            return res.status(400).json({error: "Missing fields"});
        }
        if(password !== confirmPassword)
        {
             return res.status(400).json({error: "Passwords and confirm Passwords does not match"});
        }
        const user = await User.findOne({name});
        if(user)
        {
            throw new Error("user already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        if(newUser)
        {
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
            })
        }
        else{
            res.status(400).json({error: "Invalid user"})
        }
    }catch(err:any)
    {
        console.log("Error caught", err.message);
        res.status(500).json({error: "Internal server error"})
        return;
    }
}

export const login = async(req: Request, res: Response) : Promise<Response | void> =>{
    try{
        const {email, password} = req.body as UserTypes;
        const user = await User.findOne({email});
        const isPasswordCorr = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorr)
        {
            res.status(400).json({error : "Invalid Login credentials"})
        }
        generateTokenSetCookie(user._id, res);
        res.status(200).json({
            _id : user._id,
            name : user.name
        })
    }catch(err:any)
    {
        console.log("Error while logging in", err.message);
        res.status(500).json({error : "Internal Server error"})
    }
}