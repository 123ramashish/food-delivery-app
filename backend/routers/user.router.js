import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();
const usercontroller = new userController();
router.get("/test", (req, res) => res.send("API is working!"));
router.post("/signup", usercontroller.userSignup);
router.post("/signin", usercontroller.userSignin);
router.post("/signout", usercontroller.userSignout);

export default router;
