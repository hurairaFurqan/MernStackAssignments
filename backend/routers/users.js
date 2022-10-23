const express = require("express");
const router = express.Router();
const authModel = require("../model/users");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

router.post("/signUP", async (req, res) => {
  const user = new authModel({
    name: req.body.name,
    password: req.body.password,
    role: req.body.role,
  });

  try {
    user.password = bcrypt.hashSync(user.password, saltRounds);
    const dataToSave = await user.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/singIN", getHash, (req, res) => {
  try {
    let name = req.body.name;
    let password = req.body.password;
    let hashValue = res.user.password;
    let dbName = res.user.name;
    let role = res.user.role;

    const bool = bcrypt.compareSync(password, hashValue);

    if (bool === true && name === dbName) {

      var token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 2,
            iat: Math.floor(Date.now() / 1000),
        },
        'secretKeyWord'
    );
      res.status(200).send({ access_token : token, name: dbName, role: role });
    } else {
      res.status(401).send({ status: "bad request" });
    }

    //res.status(200).send({ status: "success", name, password, hashValue, bool });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await authModel.find();

    res.send(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

async function getHash(req, res, next) {
  let user;
  try {
    user = await authModel.findOne({ name: req.body.name });
    if (user == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

module.exports = router;
