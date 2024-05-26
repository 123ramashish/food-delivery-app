import { connectDB } from "./DataBase/database.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// Applying Cors
// app.use(cors());

// JSON formatting
app.use(express.json()); // PARSER JSON

app.listen(process.env.PORT, () => {
  console.log(`Listening ON port ${process.env.PORT}`);
  // DataBase Connectivity
  connectDB();
});
