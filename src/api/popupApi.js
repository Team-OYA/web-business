import userInstance from "./userBaseApi";

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
        return await userInstance.get(`/plans/${planId}/popup`)
    },

    /**
     * 나의 사업계획서에 따른 팝업 조회
     *
     * @since 2024.02.29
     * @author 이상민
     */
    savePopup: async (popupData) => {
        const formData = new FormData();
        formData.append('data', new Blob([JSON.stringify(popupData)], { type: 'application/json' }));
        const response = await userInstance.post(`/popups`, formData);
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
        const response = await userInstance.post('/popups/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.data.url;
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
