import { connectDB } from "./DataBase/database.js";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routers/user.router.js";
import { CustomError } from "./middlewares/custom.error.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
// Applying Cors
// app.use(cors());

// middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json()); // PARSER JSON
app.use("/api/user", userRouter);

// handle error for api
app.use((req, res, next) => {
  next(new CustomError("API route not found", 404));
});
// global error handling
app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ error: err.message });
  }
  console.error(err);
  return res.status(500).send("Something is wrong!");
});

// port
app.listen(process.env.PORT, () => {
  console.log(`Listening ON port ${process.env.PORT}`);
  // DataBase Connectivity
  connectDB();
});
