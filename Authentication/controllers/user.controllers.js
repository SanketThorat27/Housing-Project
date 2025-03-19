import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Fix the typo here
        console.log(req.body);

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ success: false, message: "User already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Fix the typo here
        const newUser = new User({
            name,
            email,
            password: hashedPassword // Fix the typo here
        });

        await newUser.save();
        return res.status(201).json({ success: true, message: "User Created Successfully", user: newUser });

    } catch (error) {
        console.error("Signup Error:", error); // Log error for debugging
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email ||!password)
        {
            return res.status(300).json({success:false,message:"All fields are required"})
        }
        const user=await User.findOne({email})
        if(!user)
        {
            return res.status(404).json({success:false,message:"User not Found"})
        }
        const comparepassword=await bcrypt.compare(password,user.password)
        if(!comparepassword)
        {
            return res.status(400).json({success:false,message:"Incorrect Password"})
        }
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:3*24*60*60*1000
        })
        return res.status(201).json({success:true,message:"User Logged In Successfully..",token})

        
    } catch (error) {
        console.log("Login Error",error)
        return res.status(500).json({ success: false, message: "Internal Server Error" });

    }
}


export const Logout=async(req,res)=>{
    try {
       res.clearCookie("token") 
      return res.status(200).json({success:true,message:"Logout Successful."})
    } catch (error) {
        return res.status(500).json({status:false,message:"Internal Server Error"})
    }
}
