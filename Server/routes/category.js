const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategoryDetails,
  getAllCategories,
} = require("../controllers/Category");

router.post("/create", createCategory);
router.get("/getCategoryDetails", getCategoryDetails);
router.get("/getAllCategories", getAllCategories);

module.exports = router