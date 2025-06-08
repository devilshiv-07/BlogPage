const createHttpError = require("http-errors");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isVerifiedUser = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if(!token) {
            const error = createHttpError(401, "token not found, User is unauthorized!");
            return next(error);
        }

        const verifiedUser = jwt.verify(token, config.accessTokenSecret);
        if (!verifiedUser) {
            const error = createHttpError(401, "Cookie not matched, Unauthorized User!");
            return next(error);
        }

        const user = await User.findById(verifiedUser._id);
        if (!user) {
            const error = createHttpError(401, "User not exist in database");
            return next(error);

        }

        req.user = user;
        next();

        
    } catch (error) {
        next(error);
    }
}

module.exports = isVerifiedUser;