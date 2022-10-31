const userSchema = require("../model/auth");
const catchAsync = require("../utils/catchAsync");

exports.getMe = catchAsync(async (req, res, next) => {
  req.params = req.user;
  next();
});

exports.getUser = catchAsync(async (req, res) => {
  const user = req.params;
  if (!user) {
    res.status(401).json(`no user found ${req.params.id}`);
  }

  res.status(200).json({ user: user });
});

exports.admin = catchAsync(async (req, res) => {
  try {
    res.status(200).json({ message: "yes you have admin rights" });
  } catch (error) {
    res.status(403).json(error.message);
  }
});

exports.user = catchAsync(async (req, res) => {
  try {
    res.status(200).json({ message: "yes you have user rights" });
  } catch (error) {
    res.status(403).json(error.message);
  }
  // res.status(200)
});
