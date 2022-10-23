const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("userauthdata", schema);
