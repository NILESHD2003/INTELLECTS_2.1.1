const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
            trim: true
        },
        comment: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            },
        ],
        upvotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    }
)

module.exports = mongoose.model("Comment", commentSchema)