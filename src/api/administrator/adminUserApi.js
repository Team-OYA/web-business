import axios from "axios";

import GetTokenFromLocalStorage from "../Common/token";
import adminInstance from "../adminBaseApi";

const Token = GetTokenFromLocalStorage('admin')
if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.25
 * @author 이상민
 */
const AdminUserApi = {
    /**
     * 일반사용자 리스트 불러오기
     *
     * @since 2024.02.25
     * @author 이상민
     */
    getUsers: async (pageNo = 0, amount = 10) => {
        console.log(Token)
        return await axios.get(`/api/v1/admin/users?type=user&pageNo=${pageNo}&amount=${amount}`);
    },
    /**
     * 사업체 리스트 불러오기
     *
     * @since 2024.02.25
     * @author 이상민
     */
    getBusiness: async (pageNo = 0, amount = 10) => {
        console.log(Token)
        return await axios.get(`/api/v1/admin/users?type=business&pageNo=${pageNo}&amount=${amount}`);
    },
};

export default AdminUserApi;
