const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Housing-userData");
    console.log("MongoDB Connected Successfully...");
  } catch (err) {
    console.error("Error", err);
  }
};
module.exports = { connectMongoDB };
