const express = require("express");
const app = express();
const connectDB = require("./config/database");
const config = require("./config/config");
const cookieParser = require('cookie-parser');
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");

// Database Connection:
const PORT = config.port;
connectDB();

// Linking with frontend:
app.use(cors({
    credentials: true,
    origin: ["https://blog-page-one-kappa.vercel.app/"]
}));

// Middlewares:
app.use(express.json());
app.use(cookieParser());

// Root endpoint:
app.get("/", (req, res) => {
    res.json({ message: "Hello, Your BlogPage server is live!"});
});

// Other Endpoints:
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

// Global Error Handler:
app.use(globalErrorHandler);

// Server:
app.listen(PORT, () => {
    console.log(`BlogPage Server is running live on port ${PORT}`);
});