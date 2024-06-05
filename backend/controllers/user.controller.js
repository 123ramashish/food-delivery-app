import passwordHash from "password-hash";
import User from "../DataBase/Schema/userschema.js";
import { CustomError } from "../middlewares/custom.error.js";
import jwt from "jsonwebtoken";
export default class userController {
  async userSignup(req, res, next) {
    try {
      const { name, email, password, admin } = req.body;
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
      next(new CustomError(err.message, 500));
    }
  }
  async userSignin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw new CustomError("User not exist", 404);
      }
      const isPasswordValid = passwordHash.verify(
        String(password),
        user.password
      );

      if (!isPasswordValid) {
        throw new CustomError("Invalid password", 401);
      }

      const token = jwt.sign(
        { email: user.email, admin: user.admin },
        process.env.JWT_KEY,
        { expiresIn: "7d" }
      );
      return res.status(200).json({ user: user, token: token });
    } catch (err) {
      console.log("Error:", err.message);
      next(new CustomError(err.message, 500));
    }
  }
}
