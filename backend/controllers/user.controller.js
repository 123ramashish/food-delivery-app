import passwordHash from "password-hash";
import User from "../DataBase/Schema/userschema.js";
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
      return res.send(err.message);
    }
  }
  async userSignin(req, res) {
    try {
      const { email, password } = req.body;

      res.send("Signin api is working!");
    } catch (err) {
      console.log("Error:", err.message);
      return res.status(404).send(err.message);
    }
  }
}
