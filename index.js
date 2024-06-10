require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const seriesRouter = require("./src/api/routes/serie");
const usersRouter = require("./src/api/routes/user");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

const app = express();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(cors());

app.use(express.json());

app.use("/api/v1/series", seriesRouter);
app.use("/api/v1/users", usersRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found")
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
})