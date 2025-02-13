const express = require("express");
const { connectMongoDB } = require("./connect");
const app = express();
const PORT = 6969;
const userRouter = require("./routes/user");
const path = require("path");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


(async () => {
    try{

        await connectMongoDB("mongodb://localhost:27017/Housing-userData");
        app.use("/", userRouter);
        app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
    }catch(err)
    {console.error("Error",err)}
})();
