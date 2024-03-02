import axios from "axios";
import GetTokenFromLocalStorage from "./Common/token";

const instance = axios.create({
    baseURL: "http://15.164.236.13:8080/api/v1",
});

instance.interceptors.request.use(
    (config) => {
        const token = GetTokenFromLocalStorage('user');
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;