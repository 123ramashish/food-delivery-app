import express from "express";
import foodController from "../controllers/food.controller.js";

const foodcontroller = new foodController();
const router = express.Router();
router.post("/newfood", foodcontroller.addFood);
router.get("/getfood/:foodName", foodcontroller.getFood);
export default router;
