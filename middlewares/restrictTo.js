const AppError = require("../utils/appError");
module.exports = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      console.log("req.user.role", req.user.role, "role", role);
      return next(new AppError("roles of candidate and DB user not matched",403))
    }
    next();
  };
};
