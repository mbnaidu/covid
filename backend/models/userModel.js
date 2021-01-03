import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    type_of_user:{
        type:String,
        required:true
    },
    dose_one:{
        type:Boolean,
        default:false
    },
    dose_two:{
        type:Boolean,
        default:false
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamp:true
})

const User = mongoose.model("User",userSchema);

export default User