import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: "Email must be in valid format!",
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Content creator", "User"],
    default: "User",
    trim: true,
  },
  profilePic: {
    type: String,
    default:
      "https://res.cloudinary.com/dci2gocwp/image/upload/v1749273236/avatar_cyu3tj.jpg",
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
