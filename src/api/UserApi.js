import axios from "axios";

const Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsc21sZWU5OUBnbWFpbC5jb20iLCJpYXQiOjE3MDg3ODkyMjIsImV4cCI6MTcwODg3NTYyMiwic3ViIjoiZ2h0bHN0bmY1MTY2QG5hdmVyLmNvbSIsImlkIjoxNDV9.24W-qveBdI4Eu4OQkroEzAOUnylz4n9cEFixTHleTPc"

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
