require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/auth");
const catchAsync = require("../utils/catchAsync");

module.exports = async (req, res, next) => {
  console.log("in protect middleware");
  let token;
  if (req.headers && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log("in protect and token from headers is:", typeof token, token );

  if (!token) {
    console.log("in !token condition");
    res.send(401).json({ message: "no token found" });
  }

  try {
    const decodedToken = jwt.verify(token, "login1946"); 

    console.log("i am line right after decoded token");
    if (!decodedToken) {
      res.send(401).json({ message: "no decoded token found" });
    }
    console.log("in protect and token is decoded", decodedToken);

    const user = await UserModel.findById(decodedToken.id);
    req.user = user;
    console.log(
      "in protect and user from database is stored in req.user",
      user
    );
    next();
  } catch (error) {
    console.log("in error condition of tryCatch in protect.js");
    res.status(400).json(error.message);
  }
};
