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

router.post("/signIN", getHash, (req, res) => {
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
          exp: Math.floor(Date.now() / 1000) + 60 * 1,
          iat: Math.floor(Date.now() / 1000),
        },
        "secretKeyWord"
      );
      res.status(200).json({ access_token: token, name: dbName, role: role });

      //res.status(200).send({ status: "success", name, password, hashValue, bool });
    } else {
      res.status(401).json("bad request");
    }
  } catch (error) {
    res.status(401).json(error.message);
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
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

async function adminMiddleWare(req, res, next) {
  // try {
  //   if (req.headers.role === "admin") {
  //     res.status(200).json("success");
  //     return next();
  //   }
  //   //res.user = user;
  //   //next();
  // } catch (error) {
  //   res.status(401).send(error.message);
  // }

  if (req.headers.role === "admin") {
    res.status(200).json("success");
    return next();
  }
  res.status(401).json("bad request");
}

async function auth(req, res, next) {
  try {
    const token = await req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "secretKeyWord");

    const user = decodedToken;

    res.user = user;
    next();
  } catch (error) {
    res.status(400).json(error.message);
  }
}

router.get("/admin", auth, adminMiddleWare, (req, res) => {
  try {
    res.status(200).json("yes you have access to me");
  } catch (error) {
    res.status(401).json(error.message);
  }
});

async function userMiddleWare(req, res, next) {
  try {
    if (req.headers.role === "user" || "admin") {
      return next();
    }
    //res.status(403).send({ status: "success", message: "access denied" });
  } catch (error) {
    res.status(403).json(error.message);
  }
}

router.get("/user", auth, userMiddleWare, (req, res) => {
  try {
    res.status(200).json("yes you have access to user");
  } catch (error) {
    res.status(401).json(error.message);
  }
});

module.exports = router;
