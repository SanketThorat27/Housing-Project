const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("login");
}

async function handlegetUserSignup(req, res) {
  res.render("signup");
}

async function handleUserLogin(req, res) {
  try {
    const [email, password] = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(500).send({ msg: "Server error" });

    if (user && user.password === password) {
      res.render("login");
    }
  } catch (err) {
    console.error("Error", err);
  }
}

async function handleGetUserLogin(req, res) {
  res.render("login");
}

module.exports = {
  handleUserSignup,
  handlegetUserSignup,
  handleGetUserLogin,
  handleUserLogin,
};
