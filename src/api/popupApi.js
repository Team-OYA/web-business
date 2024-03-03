import GetTokenFromLocalStorage from "./Common/token";
import axios from "axios";
import userInstance from "./userBaseApi";

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

    /**
     * 나의 사업계획서에 따른 팝업 조회
     *
     * @since 2024.02.29
     * @author 이상민
     */
    savePopup: async (popupData) => {
        console.log(popupData)
        const formData = new FormData();
        formData.append('data', new Blob([JSON.stringify(popupData)], { type: 'application/json' }));
        const response = await axios.post(`/api/v1/popups`, formData);
        return response.data;
    },

    /**
     * 나의 팝업스토어 게시글 리스트 조회
     *
     * @since 2024.03.03
     * @author 김유빈
     */
    getMyPopups: async (pageNo = 0, amount = 5) => {
        return await userInstance.get(`/popups?sort=me&pageNo=${pageNo}&amount=${amount}`)
    },
}

export default PopupApi;
