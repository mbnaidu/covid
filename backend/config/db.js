import mongoose from "mongoose";

const DBConnection = async() =>{

    try {
       const connect= await mongoose.connect(process.env.DB_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useCreateIndex:true
    })
    console.log("DB Connected Successfully")
        
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

}

export default DBConnection;