import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", FoodSchema);

export default Food;
