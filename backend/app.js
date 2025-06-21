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
const allowedOrigins = ["https://blog-page-one-kappa.vercel.app"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Middlewares:
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));

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