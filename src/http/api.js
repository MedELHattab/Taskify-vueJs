import axios from "axios";

// Set Axios default configurations
axios.defaults.withCredentials = true;

// Create Axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

// Add a request interceptor to attach token to headers
api.interceptors.request.use(
    (config) => {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");

        // If token exists, add it to the request headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
