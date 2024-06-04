export default class userController {
  userSignup(req, res, next) {
    const { name, email, password } = req.body;

    res.status(200).json({ name: name, email: email, password: password });
  }
  userSignin(req, res) {
    res.send("Signin api is working!");
  }
}
