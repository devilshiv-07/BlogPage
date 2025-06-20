const cloudinary = require("cloudinary").v2;
const config = require("./config");

cloudinary.config({
    cloud_name: config.cloudName,
    api_key: config.cloudKey,
    api_secret: config.cloudSecret,
})

module.exports = cloudinary;