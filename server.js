require("dotenv").config();
const express = require("express");
const app = express();


// const bodyParser = require("body-parser");

const cors = require("cors");
const authRouter = require("../AuthStore-Backend/router/auth");
const userRouter = require("../AuthStore-Backend/router/user");
const dbConnect = require("../AuthStore-Backend/utils/dbConnect");
const productRouter = require('../AuthStore-Backend/router/product');
const AppError = require("../AuthStore-Backend/utils/appError");
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

dbConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.use("/users", userRouter);


app.use('/product', productRouter);
const PORT = 8080;

app.use("*", (req, res) => {
  console.log("in * condition of app.use");
  res.status(404).json(`Internal Server Error at ${req.originalUrl}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
