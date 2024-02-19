const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    tirm: true,
  },
  image: [
    {
      type: String,
    },
  ],
  content: {
    type: String,
    required: true,
    tirm: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    trim: true,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  upvotedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
