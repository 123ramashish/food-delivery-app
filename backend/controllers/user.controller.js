import passwordHash from "password-hash";
import User from "../DataBase/Schema/userschema.js";
import { CustomError } from "../middlewares/custom.error.js";
import jwt from "jsonwebtoken";
export default class userController {
  async userSignup(req, res, next) {
    try {
      const { admin, email, name, password } = req.body;
      const hashedPassword = await passwordHash.generate(String(password));
      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        admin: admin,
      });
      await newUser.save();
      return res.status(200).send("Signup successful!");
    } catch (err) {
      console.log("Error:", err.message);
      // next(new CustomError(err.message, 500));
      return res.status(409).json(err.message);
    }
  }
  async userSignin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send("User not exist!");
      }
      const isPasswordValid = passwordHash.verify(
        String(password),
        user.password
      );

      if (!isPasswordValid) {
        return res.status(401).send("Invalid Password!");
      }

      const token = jwt.sign(
        { email: user.email, admin: user.admin },
        process.env.JWT_KEY,
        { expiresIn: "7d" }
      );
      const option = {
        maxAge: 60 * 60 * 24 * 7 * 7,
        httpOnly: true,
        secured: true,
      };
      const { password: pass, ...rest } = user._doc;
      return res.status(200).cookie("SessionID", token, option).json({ rest });
    } catch (err) {
      console.log("Error:", err.message);
      next(new CustomError(err.message, 500));
    }
  }

  async userSignout(req, res, next) {
    try {
      res
        .clearCookie("SessionID")
        .status(200)
        .json({ message: "Signout successful" });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json(err.message);
    }
  }
}
