import express from "express"
import userRoutes from "./routes/userRoutes.js";
import DBConnection from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()


const app = express();


DBConnection();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("EY GAMIFICATION")
})

app.use("/api/users",userRoutes);

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

