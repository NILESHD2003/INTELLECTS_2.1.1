const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
    {
        orgName: {
            type: String,
            required: true
        },
        about: {
            type: String,
            trim: true
        },
        est: {
            type: Date,
        },
        size: {
            type: Number,
        },
        founder: [
            {
                type: String,
                trim: true
            }
        ],
        coFounders: [
            {
                type: String,
                trim: true
            }
        ]
    }
)

module.exports = mongoose.model("Startup", startupSchema)