const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const { signUp, login, logout } = require("../controllers/userController");
const isVerifiedUser = require("../middlewares/tokenVerification");

router.route("/signup").post(upload.single("profilePic"), signUp);
router.route("/login").post(login);
router.route("/logout").post(isVerifiedUser, logout);

module.exports = router;