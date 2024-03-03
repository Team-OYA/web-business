import axios from "axios";
import GetTokenFromLocalStorage from "./Common/token";

/**
     * adminBaseApi 생성
     *
     * @since 2024.03.02
     * @author 이승민
     */

const adminInstance = axios.create({
    baseURL: "http://15.164.236.13:8080/api/v1",
});

adminInstance.interceptors.request.use(
    (config) => {
        const token = GetTokenFromLocalStorage('admin');
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default adminInstance;