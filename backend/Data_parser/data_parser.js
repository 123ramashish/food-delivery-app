//  Make Data Parser schema here
const zod = require("zod");

const user_schema = zod.object({
  username: zod
    .string({ required_error: "Name is requires" })
    .trim()
    .min(3, { message: "Length should be minimun 3" }),
  email: zod.string().email(),
  password: zod.string().min(8),
});

module.exports = { user_schema };
