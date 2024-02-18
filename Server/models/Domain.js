const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Domain", domainSchema);
