const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  productName: {
    required: [true, "Please tell us your name"],
    type: String,
    trim: true,
    unique: true,
    maxlength: [20, "Max length exceeded"],
    minlength: [1, "Less than min length"],
  },
  productPrice: {
    required: [true, "Please tell us your product Price"],
    type: String,
    trim: true,
    maxlength: [9, "Max length exceeded"],
    minlength: [1, "Less than min length"],
  },
  image: {
    type: String,
  },
});

module.exports = new mongoose.model('product', schema);
