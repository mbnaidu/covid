import express from "express";
import User from "../models/userModel.js";
import {registerUser} from "../controllers/userController.js"

const router = express.Router();

router.route("/register").post(registerUser);

export default router
