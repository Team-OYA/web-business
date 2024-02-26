import axios from "axios";

import Token from "./token"

if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.25
 * @author 이상민
 */
const UserApi = {
    /**
     * 일반사용자 리스트 불러오기
     *
     * @since 2024.02.25
     * @author 이상민
     */
    getUsers: async () => {
        const response = await axios.get(`/api/v1/admin/users?type=user`);
        return response;
    },
    /**
     * 사업체 리스트 불러오기
     *
     * @since 2024.02.25
     * @author 이상민
     */
    getBusiness: async () => {
        const response = await axios.get(`/api/v1/admin/users?type=business`);
        return response;
    },
};

export default UserApi;
