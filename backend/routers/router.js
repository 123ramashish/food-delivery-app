const { Router } = require("express");

const router = Router();

const user = require("./user")

router.use("/user",user)

module.exports = router