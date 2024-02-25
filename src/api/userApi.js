import axios from "axios";

const Token = "{token}"

if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * User API와 통신
 *
 * @since 2024.02.25
 * @author 이상민
 */
const UserApi = {
    getUsers: async () => {
        const response = await axios.get(`/api/v1/admin/users?type=user`);
        return response;
    },
    getBusiness: async () => {
        const response = await axios.get(`/api/v1/admin/users?type=business`);
        return response;
    },
};

export default UserApi;
