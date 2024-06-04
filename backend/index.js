import { connectDB } from "./DataBase/database.js";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routers/user.router.js";
dotenv.config();
const app = express();
// Applying Cors
// app.use(cors());

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json()); // PARSER JSON
app.use("/api/user", userRouter);

// port
app.listen(process.env.PORT, () => {
  console.log(`Listening ON port ${process.env.PORT}`);
  // DataBase Connectivity
  connectDB();
});
