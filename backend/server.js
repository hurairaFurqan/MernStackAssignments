require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;

const users = require("../backend/routers/users");
app.use("/users", users);

app.listen(PORT, () => {
  console.log("server is listening at port ", PORT);
});
