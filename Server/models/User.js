const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true,
    },
    upvotedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    image: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    accountType: {
        type: String,
        enum: ["Startup", "Entrepreneur"]
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    blogsPending: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    userDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    startupDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema)