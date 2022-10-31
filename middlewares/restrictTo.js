const AppError = require("../utils/appError");
module.exports = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      console.log("req.user.role", req.user.role, "role", role);
      return next(new AppError("new error with no solid proof",403))
    }
    next();
  };
};
