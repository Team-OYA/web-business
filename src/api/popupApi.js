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
     * 팝업 이미지 저장하기
     *
     * @since 2024.03.02
     * @author 이상민
     */
    saveImage: async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post('/api/v1/popups/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.data.url;
    },
}

export default PopupApi;
