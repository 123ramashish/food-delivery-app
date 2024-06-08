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

  async getFood(req, res, next) {
    try {
      const { foodName } = req.params;
      console.log(foodName);
      const food = await Food.find();
      console.log(food);
      if (food.length === 0) {
        return res.status(404).send("Item not exist!");
      }

      if (foodName === "all") {
        return res.status(200).json(food);
      } else {
        const filteredFood = food.filter((item) =>
          item.name.includes(foodName)
        );

        if (filteredFood.length === 0) {
          return res.status(204).send("Item not exist!");
        }

        return res.status(200).send(filteredFood);
      }
    } catch (err) {
      console.log(err.message);
      next(new CustomError("Something is wrong to get food!", 500));
    }
  }
}
