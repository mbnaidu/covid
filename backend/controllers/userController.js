import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js"
import bcryptjs from "bcryptjs"

const registerUser = async(req,res) =>{

    const {username,email,phone,type_of_user,address,password} = req.body;

    if(!username||!email||!phone||!type_of_user||!address||!password){
        return res.status(400).json({err:"Please fill all fields"})
    }

    const user = await User.findOne({email});

    if(user){
        return res.status(400).json({err:"User already exists"})
    }

    const salt = await bcryptjs.genSalt(10);
    const hashed_password = await bcryptjs.hash(password,salt)

    const newUser = await User.create({
        username,
        email,
        phone,
        type_of_user,
        address,
        password:hashed_password
    })
    

    if(newUser){
        return res.json({
            username,
            email,
            token:generateToken(newUser._id)
        })
    }else{
        return res.status(400).json({err:"Register user fail"})
    }

}


const login = async(req,res) =>{

    const {email,password} =req.body

}




export {registerUser}