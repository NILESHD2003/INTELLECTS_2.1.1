const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true
        },
        taggedBlogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Blog"
            }
        ],
        about:{
            type: String,
            trim: true
        }
    }
)

module.exports = mongoose.model("Category", categorySchema)