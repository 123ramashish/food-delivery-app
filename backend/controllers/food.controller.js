export default class foodController {
  async addFood(req, res, next) {
    const { name, price, imageUrl } = req.body;
    if (
      name.trim("") === "" ||
      price.trim("") === "" ||
      imageUrl.trim("") === ""
    ) {
      return res.status(400).send("Invalid Credentials");
    }
  }
}
