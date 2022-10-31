require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/auth");
const catchAsync = require("../utils/catchAsync");

module.exports = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers && req.headers.authorization.startsWith("Bearer")) {
    token = await req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.send(401).json({ message: "no token found" });
  }

  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  if (!decodedToken) {
    res.send(401).json({ message: "no decoded token found" });
  }

  const user = await UserModel.findById(decodedToken.id);
  req.user = user;
  next();
});
