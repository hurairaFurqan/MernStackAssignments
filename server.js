require("dotenv").config();
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

const cors = require("cors");
const authRouter = require("../Auth-backend Express/router/auth");
const userRouter = require("../Auth-backend Express/router/user");
const dbConnect = require("../Auth-backend Express/utils/dbConnect");
const AppError = require("../Auth-backend Express/utils/appError");

dbConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.use("/users", userRouter);
const PORT = 8080;

app.use("*", (req, res) => {
  console.log("in * condition of app.use");
  res.status(404).json(`Internal Server Error at ${req.originalUrl}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
