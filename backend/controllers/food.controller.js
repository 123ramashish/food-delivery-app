import Food from "../DataBase/Schema/food.schema.js";
import { CustomError } from "../middlewares/custom.error.js";

export default class FoodController {
  async addFood(req, res, next) {
    const { name, price, imageUrl } = req.body;

    if (!name || !imageUrl || !price) {
      return res.status(400).send("Invalid Credentials");
    }

    try {
      const food = new Food({
        name: name.trim(),
        price,
        imageUrl: imageUrl.trim(),
      });

      await food.save();

      return res.status(201).send("Food added successfully");
    } catch (err) {
      console.log(err.message);
      return next(
        new CustomError("Something went wrong saving the food!", 500)
      );
    }
  }
}
