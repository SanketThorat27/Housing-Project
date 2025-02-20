const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanketthorat27:Gqyyp9ZnfAPrvu8G@cluster0.adliz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("MongoDB Connected Successfully...");
  } catch (err) {
    console.error("Error", err);
  }
};

module.exports = { connectMongoDB };
