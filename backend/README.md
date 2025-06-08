# Blog Platform Backend

This is the backend server for the Blog Platform project. It is built with **Node.js**, **Express**, **MongoDB**, **JWT** for authentication, **Cloudinary** for image uploads, and includes features like protected routes, blog creation, user authentication, and like/view tracking.

---

## 📁 Folder Structure
```bash
backend/
├── config/ # Configuration files (env, DB, Cloudinary)
├── controllers/ # Business logic for blogs and users
├── middlewares/ # JWT verification and error handling
├── models/ # Mongoose schemas
├── routes/ # Express route handlers
├── utils/ # Utility functions
├── app.js # Express app entry
└── .env # Environment variables
```

---

## 🚀 Features

- User signup & login with hashed passwords (`bcryptjs`)
- JWT-based authentication using HTTP-only cookies
- Create, fetch, and like blog posts
- Blog view count tracking
- Image upload with **Cloudinary**
- Global error handling middleware

---

## 🧪 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **Cloudinary + multer-storage-cloudinary**
- **dotenv**
- **cookie-parser**
- **cors**

---

## ⚙️ Environment Variables

Create a `.env` file in the root of your backend directory with the following keys:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

---

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm run dev
```

---

## 📡 API Routes

### 🔐 Auth
- POST /api/v1/user/signup – Register a new user
- POST /api/v1/user/login – Log in and receive JWT cookie
- GET /api/v1/user/logout – Log out (clear cookie)

### 📝 Blog
- POST /api/v1/blog – Create blog post (requires auth + image upload)
- GET /api/v1/blog/:id – Get blog by ID & increment view count
- POST /api/v1/blog/:id/like – Like/unlike a blog (requires auth)

---

## ✅ Middleware
- isVerifiedUser – Auth middleware to protect routes
- multer – Handles file uploads to Cloudinary
- globalErrorHandler – Catches errors and sends formatted responses

---

## 📦 Deployment Tips
- Use services like Render, Railway, or Vercel (serverless functions) for hosting
- Add secure production CORS_ORIGIN in cors config
- Use a logging service (e.g., Sentry, LogRocket) for better error tracking.

---

## 👨‍💻 Author
#### Made with 💻 by Shivank Tripathi