const Blog = require("../models/blogModel");
const createHttpError = require("http-errors");

const getAllBlogs = async (req, res, next) => {
  try {
    const  { page = 1, category = "Trending" } = req.query;
    const limit = 6;
    const skip = (page - 1) * limit;

    const sortOption = category === "Latest" 
       ? { createdAt: -1 }
       : { viewCount: -1 };

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find()
      .sort( sortOption )
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      blog: blogs,
      totalPages: Math.ceil(totalBlogs / limit),        
    });

  } catch (error) {
    next(error);
  }
};

const createBlog = async (req, res, next) => {
  try {    
    const { name, role, title, category, intro, content, userProfileUrl } =
      req.body;
    const imageUrl = req.file?.path;

    if (
      !name ||
      !role ||
      !title ||
      !category ||
      !intro ||
      !content ||
      !userProfileUrl
    ) {
      const error = createHttpError(400, "All fields are must!");
      return next(error);
    }

    if (!req.file) {
      const error = createHttpError(400, "Image file is required!");
      return next(error);
    }

    const blog = {
      name,
      role,
      title,
      category,
      intro,
      content,
      userProfileUrl,
      imageUrl,
    };
    const newBlog = new Blog(blog);
    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully!",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error in createBlog:", error);
    next(error);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const userId = req.user._id;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      const error = createHttpError(404, "Blog is not found!");
      return next(error);
    }

    if(userId && blog.viewedBy.indexOf(userId) === -1) {
      blog.viewedBy.push(userId);
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog Fetched successfully!",
      blog: blog,
    });
  } catch (error) {
    next(error);
  }
};

const likeBlogById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const userId = req.user._id;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      const error = createHttpError(404, "Blog is not found!");
      return next(error);
    }

    const index = blog.likedBy.indexOf(userId);

    if (index !== -1) {
      // 👎 User already liked: unlike it
      blog.likedBy.splice(index, 1);
    } else {
      // 👍 User hasn't liked yet
      blog.likedBy.push(userId);
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: index !== -1 ? "Blog Unliked!" : "Blog Liked!",
      likeCount: blog.likedBy.length,
      color: index !== -1 ? "" : "red-500"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBlogs, createBlog, getBlogById, likeBlogById };