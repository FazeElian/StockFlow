import axios from "axios";

const api = axios.create ({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
    // Get token
    const token = localStorage.getItem("AUTH_TOKEN");
    if(token) {
        // Set token on headers
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default api;