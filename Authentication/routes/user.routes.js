import express from "express"
import { Login, Logout, Signup } from "../controllers/user.controllers.js";
const UserRoutes=express.Router();

UserRoutes.post("/signup",Signup)
UserRoutes.post("/login",Login)
UserRoutes.post("/logout",Logout)
export default UserRoutes