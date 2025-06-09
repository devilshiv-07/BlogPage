# 📝 BlogPage – React Frontend

Welcome to the **frontend** of **BlogPage**, a dynamic blogging platform where users can **sign up**, **log in**, **create blogs**, and explore content based on popularity and recency. Built using **React**, **Redux Toolkit**, and **Tailwind CSS**, this frontend connects with a Node.js & Express backend API.

---

## 🌍 Live Demo

🔗 Frontend: [https://blog-page-one-kappa.vercel.app](https://blog-page-one-kappa.vercel.app)  
🔗 Backend: [https://blogpage-ln3o.onrender.com](https://blogpage-ln3o.onrender.com)

---

## 📁 Project Structure
```bash
frontend/
├── public/ # Static files
├── src/
│ ├── assets/ # Images or static frontend assets
│ ├── components/ # Reusable UI components
│ │ ├── BlogCard.jsx
│ │ ├── FullScreenLoader.jsx
│ │ └── Navbar.jsx
│ ├── hooks/ # Custom React hooks
│ │ └── useLoadData.js
│ ├── http/ # Axios setup and API base config
│ │ └── index.js
│ ├── pages/ # Page components (routes)
│ │ ├── BlogPage.jsx
│ │ ├── Blog.jsx
│ │ ├── CreateBlog.jsx
│ │ ├── Login.jsx
│ │ └── SignUp.jsx
│ ├── redux/ # Redux Toolkit (auth/blog slices)
│ ├── utils/ # Utility functions/helpers
│ │ └── index.js
│ ├── App.jsx # App component with route definitions
│ ├── index.css # Tailwind/global styles
│ └── main.jsx # React entry point
├── .env # Environment variables
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Features

- 🔐 **User Authentication (JWT + Cookies)**
- 🖋️ **Create, Read, Delete Blogs**
- 🧑‍💼 **User Dashboard** with personal blog tracking
- 📈 **Trending** & 📅 **Latest** sorting
- 🖼️ **Image Upload** via Cloudinary
- 📦 **Redux Toolkit** for state management
- 🌐 **Protected Routes**
- ⚡ **Full-screen Loader**
- ✅ **Toast Notifications**

---

## 🧪 Tech Stack

- **React** (Vite)
- **Redux Toolkit**
- **React Router DOM**
- **Axios**
- **Tailwind CSS**
- **Cloudinary**
- **Notistack** or **React Hot Toast**

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/devilshiv-07/BlogPage.git
cd BlogPage/frontend
```

### 2. Install Dependencies
```bash
npm install
```

---

### 3. Run Development Server
```bash
npm run dev
```

---

## 🔐 Auth & CORS Setup

- Uses HTTP-only cookies for secure auth.
- Axios configured with withCredentials: true.
- Backend must have:
```bash
cors({
  origin: ["https://blog-page-one-kappa.vercel.app"],
  credentials: true
});
```

---

## 🧠 Redux State
- userSlice: Manages login, logout, current user.

---

## 📦 Deployment
- Frontend deployed on Vercel
- Backend deployed on Render

---

# ✨ Author
- Made with ❤️ by Shivank Tripathi
- 📧 Email: shivank.2022ug1075@iiitranchi.ac.in
