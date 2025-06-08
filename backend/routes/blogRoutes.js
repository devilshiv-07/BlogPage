const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const isVerifiedUser = require("../middlewares/tokenVerification");
const { getAllBlogs, createBlog, getBlogById, likeBlogById } = require("../controllers/blogController");

router.route("/all").get(getAllBlogs);
router.route("/create").post(isVerifiedUser, upload.single("image"), createBlog);
router.route("/view/:id").get(getBlogById);
router.route("/like/:id").put(isVerifiedUser, likeBlogById);

module.exports = router;