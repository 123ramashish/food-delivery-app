// Given simple user schema

const mongoose = require("mongoose")

const User_schema = new mongoose.Schema({
    username : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }

})


const User = new mongoose.model("User",User_schema);

module.exports = {User,User_schema};
