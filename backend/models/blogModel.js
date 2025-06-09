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
      default: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
    },
    userProfileUrl: {
      type: String,
      required: true,
    },
    viewedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    likedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }]

},{ timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);