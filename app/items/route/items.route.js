const express = require("express");
const router = express.Router();
const postItem = require("../controller/item.js");
// const control=require('../../user/controller/auth')
router.post("/upload", postItem.upload.single("file"), postItem.uploadnewItem);
router.get("/getitem", postItem.getallItems);
router.post("/searchItems", postItem.searchItems);
router.post("/update", postItem.upload.single("file"), postItem.updateItem);
router.post("/deleteItem", postItem.deleteItem);
module.exports = router;
