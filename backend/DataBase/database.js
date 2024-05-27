import "dotenv/config";
import mongoose from "mongoose";
const URI = process.env.MONGODB_URI;
export const connectDB = async () => {
  try {
    mongoose
      .connect(URI)
      .then(() => {
        console.log("Database Connected!");
      })
      .catch((err) => {
        console.log("Failed to connect Database:", err.message);
      });
  } catch (error) {
    console.log(error);
  }
};
