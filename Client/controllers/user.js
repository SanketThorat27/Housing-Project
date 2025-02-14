const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "Email already registered" });
    }

    await User.create({ name, email, password });
    return res.render("login");
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).send({ msg: "Internal server error" });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ msg: "Invalid email or password" });
    }

    if (user.password !== password) {  // Incorrect password check
      return res.status(401).send({ msg: "Invalid email or password" });
    }

    return res.render("dashboard");
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).send({ msg: "Internal server error" });
  }
}

async function handlegetUserSignup(req, res) {
  res.render("signup");
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
