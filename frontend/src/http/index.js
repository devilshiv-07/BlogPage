import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        Accept: "application/json"
    }
})

// Create a separate instance for file uploads
const apiFormData = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    // No Content-Type header - let browser set it with boundary for multipart/form-data
})

// Add request interceptor to set Content-Type for JSON requests
api.interceptors.request.use((config) => {
    if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
});

// User Endpoints:
export const getUserData = () => api.get("/api/user/get");
export const login = (data) => api.post("/api/user/login", data);
export const signup = (data) => {
    // Convert data to FormData for file upload
    const formData = new FormData();
    Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
            formData.append(key, data[key]);
        }
    });
    return apiFormData.post("/api/user/signup", formData);
};
export const logout = () => api.post("/api/user/logout");

// Blog Endpoints:
export const getAllBlogs = ({pageNumber, category}) => api.get(`/api/blog/all?page=${pageNumber}&category=${category}`);
export const createBlog = (data) => {
    // Convert data to FormData for file upload
    const formData = new FormData();
    Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
            formData.append(key, data[key]);
        }
    });
    return apiFormData.post("/api/blog/create", formData);
};
export const getBlogById = (blogId) => api.get(`/api/blog/view/${blogId}`);
export const likeBlogById = (blogId) => api.put(`/api/blog/like/${blogId}`);