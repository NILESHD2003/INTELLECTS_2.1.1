const express = require("express")
const router = express.Router()

const { createBlog, getBlogById, getBlogsByCategory, searchBlogByTitle } = require('../controllers/Blog')

router.post("/create", createBlog)
router.get("/getblog", getBlogById)
router.get("/blogCategory", getBlogsByCategory)
router.get("/searchBlogByTitle", searchBlogByTitle)

module.exports = router