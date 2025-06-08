import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// User Endpoints:
export const getUserData = () => api.get("/api/user");
export const login = (data) => api.post("/api/user/login", data);
export const signup = (data) => api.post("/api/user/signup", data);
export const logout = () => api.post("/api/user/logout");

// Blog Endpoints:
export const getAllBlogs = ({pageNumber, category}) => api.get(`/api/blog/all?page=${pageNumber}&category=${category}`);
export const createBlog = (data) => api.post("/api/blog/create", data);
export const getBlogById = (blogId) => api.get(`/api/blog/view/${blogId}`);
export const likeBlogById = (blogId) => api.put(`/api/blog/like/${blogId}`);