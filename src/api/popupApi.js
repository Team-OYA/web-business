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
        console.log(popupData)
        const formData = new FormData();
        formData.append('data', new Blob([JSON.stringify(popupData)], { type: 'application/json' }));
        const response = await userInstance.post(`/popups`, formData);
        return response.data;
    },
}

export default PopupApi;
