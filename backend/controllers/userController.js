const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  try {
    const { name, phone, email, password, role } = req.body;
    const imageUrl = req.file.path;

    if (!name || !email || !password || !phone) {
      const error = createHttpError(
        400,
        "You must provide name, email, password and phone"
      );
      return next(error);
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      const error = createHttpError(400, "This email is registered!");
      return next(error);
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      name,
      phone,
      email,
      password: hashedPassword,
      role,
      profilePic: imageUrl,
    };

    const newUser = new User(user);
    await newUser.save();

    const accessToken = jwt.sign(
      { _id: newUser._id },
      config.accessTokenSecret,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(201).json({
      success: true,
      message: `Welcome ${name} to To-let Blog`,
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = createHttpError(400, "All fields are required!");
      return next(error);
    }

    const isUserPresent = await User.findOne({ email });
    if (!isUserPresent) {
      const error = createHttpError(401, "Email not found, Pls SignUp");
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, isUserPresent.password);
    if (!isMatch) {
      const error = createHttpError(401, "Incorrect Password");
      return next(error);
    }

    const accessToken = jwt.sign(
      { _id: isUserPresent._id },
      config.accessTokenSecret,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({
      success: true,
      message: `Welcome back ${isUserPresent.name}`,
      data: isUserPresent,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({ success: true, message: "User logout successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, login, logout };
