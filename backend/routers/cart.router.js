import express from "express";
import cartController from "../controllers/cart.controller.js";

const cartcontroller = new cartController();
const router = express.Router();
router.get("/addcart/:productId", cartcontroller.addToCart);
export default router;
