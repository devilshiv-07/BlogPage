const express = require("express");
const app = express();
const connectDB = require("./config/database");
const config = require("./config/config");
const cookieParser = require('cookie-parser');

const PORT = config.port;
connectDB();

// Middlewares:
app.use(express.json());
app.use(cookieParser());

// Root endpoint:
app.get("/", (req, res) => {
    res.json({ message: "Hello, Your BlogPage server is live!"});
});

// Server:
app.listen(PORT, () => {
    console.log(`BlogPage Server is running live on port ${PORT}`);
});