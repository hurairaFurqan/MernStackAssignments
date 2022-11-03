require("dotenv").config();
const userModel = require("../model/auth");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
exports.SignUp = catchAsync(async (req, res) => {
  //console.log(req.body.password);
  let user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  const dataToSave = await user.save();
  res.status(200).json({
    status: "Success",
    dataToSave,
  });
});

exports.SignIn = catchAsync(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email && !password) {
    res.status(400).json({ message: "email or password missing" });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "no user found from DB" });
  }

  if (user.correctPassword(password, user.password)) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 30,
        iat: Math.floor(Date.now / 1000),
        id: user._id,
      },
      process.env.SECRET_KEY
    );

    const person = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    res.status(200).json({ token: token, user: person });
  }
});
