const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        about: {
            type: String,
            trim: true
        },
        skills:[
            {
                type: String,
                trim: true
            }
        ],
        interest: [
            {
                type: String,
                trim: true
            }
        ],
        links: [
            {
                platform: {
                    type: String,
                    trim: true
                },
                url: {
                    type: String,
                    trim: true
                }
            }
        ],
        city: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        experience: [
            {
                org: {
                    type: String,
                    required: true
                },
                from: {
                    type: Date,
                    required: true
                },
                till: {
                    type: Date
                },
                position: {
                    type: String,
                    required: true
                }
            }
        ],
        education: [
            {
                insitute: {
                    type: String,
                    required: true,
                    trim: true
                },
                from: {
                    type: String,
                    required: true,
                    trim: true
                },
                till: {
                    type: String,
                    required: true,
                    trim: true
                },
                subject: {
                    type: String,
                    required: true,
                    trim: true
                },
                additionalInfo: {
                    type: String,
                    required: true,
                    trim: true,
                }
            }
        ] 
    }
)

module.exports = mongoose.model("Profile", profileSchema);
