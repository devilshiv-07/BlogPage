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
export const login = (data) => api.post("/api/login", data);
export const signup = (data) => api.post("/api/register", data);
export const logout = () => api.post("/api/logout");

// Blog Endpoints:
export const createBlog = (data) => api.post("/api/create-blog", data);
export const getBlogById = (blogId) => api.get(`/api/${blogId}/`);