import express, { urlencoded } from "express";
import dotenv from "dotenv";
import ConnectDB from "./connect.js";
import UserRoutes from "./routes/user.routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(cookieParser())
app.use(cors({
    origin:true,
    credentials:true
}))
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 5200;
const Start = async () => {
  try {
    ConnectDB();
    app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
    app.use("/auth", UserRoutes);
  } catch (error) {
    console.log("ERROR", error);
  }
};
Start();
