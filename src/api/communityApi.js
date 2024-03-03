import GetTokenFromLocalStorage from "./Common/token";
import axios from "axios";
import userInstance from "./userBaseApi";

const Token = GetTokenFromLocalStorage('user')
if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const CommunityApi = {

    /**
     * 나의 커뮤니티 게시글 리스트 조회
     *
     * @since 2024.03.03
     * @author 김유빈
     */
    getMyCommunities: async (pageNo = 0, amount = 5) => {
        return await userInstance.get(`/communities?type=me&pageNo=${pageNo}&amount=${amount}`)
    },
}

export default CommunityApi;
