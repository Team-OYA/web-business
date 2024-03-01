import GetTokenFromLocalStorage from "./Common/token";
import axios from "axios";

const Token = GetTokenFromLocalStorage('user')
if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.03.01
 * @author 이상민
 */
const PopupApi = {
    /**
     * 나의 사업계획서에 따른 팝업 조회
     *
     * @since 2024.02.29
     * @author 이상민
     */
    findByPlanId: async (planId = 0) => {
        return await axios.get(`/api/v1/plans/${planId}/popup`)
    },
}

export default PopupApi;
