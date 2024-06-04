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
      res.status(200).send("Signup successful!");
    } catch (err) {
      console.log("Error:", err.message);
      res.send(err.message);
    }
  }
  userSignin(req, res) {
    res.send("Signin api is working!");
  }
}
