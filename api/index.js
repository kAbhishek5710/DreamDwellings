import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("App is listening to port 8080");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
