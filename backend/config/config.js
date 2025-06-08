require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURI: process.env.MONGODB_URI,
    nodeEnv: process.env.NODE_ENV || "developmnent",
    accessTokenSecret: process.env.JWT_SECRET,
    cloudName: process.env.CLOUD_NAME,
    cloudSecret: process.env.CLOUD_SECRET,
    cloudKey: process.env.CLOUD_KEY,
})

module.exports = config;