const uploadPost = require("../model/items.model");

exports.userPostObj = (item, file) => {
  try {
    return new uploadPost({
      productName: item.productName,
      Description: item.Description,
      Price: item.Price,
      Quantity: item.Quantity,
      Gender: item.Gender,
      File: file,
      Size: item.Size,
      Suplier: item.Suplier,
      Category: item.Category,
      subCategory: item.subCategory,
    });
  } catch (error) {
    throw error;
  }
};

exports.saveData = (userPostObj) => {
  try {
    return userPostObj.save();
  } catch (error) {
    throw error;
  }
};
