import axios from "axios";

import GetTokenFromLocalStorage from "../Common/token";

const Token = GetTokenFromLocalStorage('admin')
if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.25
 * @author 이상민
 */
const AdminCommunityApi = {
    /**
     * Community 리스트 불러오기
     *
     * @since 2024.02.25
     * @param {number} pageNo - 가져올 페이지 번호
     * @param {number} amount - 한 페이지당 아이템 수
     * @returns {Promise} - API 호출 결과를 담은 Promise
     * @author 이상민
     */
    getCommunities: async (pageNo = 0, amount = 10) => {
        return await axios.get(`/api/v1/communities?type=all&pageNo=${pageNo}&amount=${amount}`);
    },
};

export default AdminCommunityApi;
