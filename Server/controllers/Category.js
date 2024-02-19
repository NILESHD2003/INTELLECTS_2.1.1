const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { categoryName, about } = req.body;

    if (!categoryName || !about) {
      return res.status(403).json({
        success: false,
        message: "All Fields required",
      });
    }

    categoryDetails = Category.create({
      categoryName,
      taggedBlogs: [],
      about,
    });

    return res.status(200).json({
      success: true,
      message: "Category Created Successfully",
      data: categoryDetails,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Issue",
      error: e.message,
    });
  }
};

exports.getCategoryDetails = async (req, res) => {
  try {
    const { categoryName, id } = req.body;

    if (!categoryName && !id) {
      return res.status(403).json({
        success: false,
        message: "Atleast Category Name or id required",
      });
    }

    var categoryDetails;
    if (!categoryName) {
      categoryDetails = await Category.findById({ _id: id });
    } else {
      categoryDetails = await Category.find({ categoryName: categoryName });
    }

    return res.status(200).json({
      success: true,
      message: "Categories Details Fetched",
      data: categoryDetails,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Issue",
      error: e.message,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categoryDetails = await Category.find({});

    res.status(200).json({
      success: true,
      message: "Available Categories fetched Successfully",
      data: categoryDetails,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Issue",
      error: e.message,
    });
  }
};
