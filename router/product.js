const express = require("express");
const multer = require("multer");
const productModel = require("../model/product");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multerMiddleware = require("../middlewares/multer");

router.post("/", multerMiddleware, (req, res) => {
  console.log(req.body.productName, req.body.productPrice);

  const url = req.protocol + "://" + req.get("host");

  const product = new productModel({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    image: url + "/uploads/" + req.file.filename,
  });

  product
    .save()
    .then((res) => {
      console.log("image is saved", res._id, res.image);
    })
    .catch((err) => {
      console.log("error: ", err, "error has been occurred");
      return res.status(400).json({ message: "bad request" });
    });
  return res.status(200).json({ message: "status okay" });
});

router.get("/", async (req, res) => {
  console.log("in get funtion of product router");
  const products = await productModel.find();
  if (!products) {
    return res.status(400).json("cannot find any data");
  }
  console.log(products);
  return res.json(products);
});

module.exports = router;
