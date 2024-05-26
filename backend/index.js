require("dotenv").config();
const cors = require("cors")
const express = require("express");

const app = express();
// Applying Cors 
app.use(cors());

// JSON formatting
app.use(express.json()); // PARSER JSON


// DataBase Connectivity 
const {connectDB} = require("./DataBase/database")

//  Importing Created Router
const router = require("./routers/router")

app.use("/",router);

app.listen(process.env.PORT,()=>{
    console.log(`Listening ON port ${process.env.PORT}`);
})
