const userSchema = require("../model/auth");
const catchAsync = require("../utils/catchAsync");

exports.getMe = catchAsync(async (req, res, next) => {
  req.params = req.user;
  console.log("in getMe middlewarre");
  next();
});

exports.getUser = catchAsync(async (req, res) => {
  console.log("in getUser function that is last one call");
  const user = req.params;
  if (user) {
    // res.status(200).json({ user: user });
    const person = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return res.json(person);
  }
  return res.status(401).json(`no user found ${req.params.id}`);
});

exports.admin = catchAsync(async (req, res) => {
  try {
    console.log("in admin last call try condition");
    return res.status(200).json({ message: "yes you have admin rights" });
  } catch (error) {
    console.log("in admin last call catch condition");
    return res.status(403).json(error.message);
  }
});

exports.user = catchAsync(async (req, res) => {
  try {
    console.log("in user last call try condition");
    return res.status(200).json({ message: "yes you have user rights" });
  } catch (error) {
    console.log("in user last call catch condition");
    return res.status(403).json(error.message);
  }
  // res.status(200)
});
