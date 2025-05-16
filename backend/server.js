import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//api config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin", adminRouter);

app.listen(port, () => console.log("Server started at port:" + port));
