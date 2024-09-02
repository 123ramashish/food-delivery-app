// Given simple user schema
import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = new mongoose.model("User", Userschema);

export default User;
