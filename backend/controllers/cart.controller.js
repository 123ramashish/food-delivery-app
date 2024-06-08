import { CustomError } from "../middlewares/custom.error.js";
import Food from "../DataBase/Schema/food.schema.js";
export default class CartController {
  async addToCart(req, res, next) {
    try {
      const { productId } = req.params;
      const product = await Food.findById(productId);

      if (!product) {
        return res.status(204).send("Items not found!");
      }

      return res.status(200).json(product);
    } catch (err) {
      console.log("Something went wrong while adding to cart:", err.message);
      next(
        new CustomError("Something went wrong while adding items to cart!", 500)
      );
    }
  }
}
