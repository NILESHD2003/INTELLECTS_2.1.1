const Blog = require("../models/Blog");
const User = require("../models/User");

// Controller function to create a blog
exports.createBlog = async (req, res) => {
  try {
    const { title, image, content, category, tags, email, author_id } = req.body;
    if (!title || !content || !category || !tags || !author_id) {
      return res.status(403).json({
        success: false,
        message: `Data Missing`,
      });
    }
    const userData = User.findOne({ _id: author_id });
    const blog = await Blog.create({
      title,
      author_id: author_id,
      image,
      content,
      category,
      tags,
      upvotedBy: [],
    });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Something Went Wrong`,
      error: err.message,
    });
  }
};

// Controller function to display a specific blog
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.body.id).populate("author category");
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({
      success: true,
      message: `Blog for ID${req.params.id} Fetched`,
      data: blog,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to display blogs based on a specific category
exports.getBlogsByCategory = async (req, res) => {
  try {
    const blogs = await Blog.find({ category: req.params.categoryId }).populate(
      "author category"
    );
    res.json({
      success: true,
      message: `Blogs for Category${req.params.categoryId} Fetched`,
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to search a blog by title
exports.searchBlogByTitle = async (req, res) => {
  const searchQuery = req.query.title;
  try {
    const blogs = await Blog.find({
      title: { $regex: searchQuery, $options: "i" },
    }).populate("author category");
    res.json({
      success: true,
      message: `Blogs for category ${req.query.title} fetched`,
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
