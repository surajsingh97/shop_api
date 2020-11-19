const Items = require("../model/items.model");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const postService = require("../service/post.service");
const { query } = require("express");

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "assest");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  },
});

exports.upload = multer({ storage: storage });

exports.uploadnewItem = (req, res) => {
  let itemData = req.body;
  console.log(itemData);
  const item = postService.userPostObj(req.body, req.file.filename);
  postService
    .saveData(item)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => next(error));
};

exports.getallItems = (req, res) => {
  Items.find().then((data, error) => {
    if (error) {
      res.status(400).send({
        message: "something is wrong",
      });
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
};

exports.updateItem = (req, res) => {
  let querySelector = req.body.req;
  console.log(req.file);
  let item = {
    productName: req.body.productName,
    Description: req.body.Description,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    File: req.file.filename,
    Gender: req.body.Gender,
    Size: req.body.Size,
    Suplier: req.body.Suplier,
    Category: req.body.Category,
    subCategory: req.body.subCategory,
  };
  // console.log(querySelector);
  Items.updateOne({ productName: querySelector }, item)
    .then((data) => {
      console.log("this is data", data);
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.deleteItem = (req, res) => {
  let querySelector = req.body.productName;
  console.log(querySelector);
  let query = { productName: querySelector };
  Items.remove(query)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.searchItems = (req, res) => {
  console.log(req.body.search);
  let data2 = new RegExp(["^", req.body.search, "$"].join(""), "i");
  let query = { subCategory: data2 };
  Items.find(query).then((data, error) => {
    if (error) {
      console.log("inside");
      res.send(error);
    } else {
      res.send(data);
    }
  });
};
