const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    intro: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    userProfileUrl: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    likedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }]

},{ timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);