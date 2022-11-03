const AppError = require("../utils/appError");
module.exports = (req, res, next) => {
    if(req.user.role === "admin" || "role"){
        next();
    }else{
        return next(new AppError("roles of candidate and DB user not matched",403))
    }
};
