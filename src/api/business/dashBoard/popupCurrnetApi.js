import userInstance from "../../userBaseApi";

/**
     * 카테고리 분석 통계
     *
     * @since 2024.03.02
     * @author 이승민
     */

const PopupCurrnetApi = {
    popupCurrnet: async () => {
        try {
            return await userInstance.get('popups/statistics')
        } catch (error) {
            console.error('팝업스토어 통계 오류:', error);
        }
    },
}

export default PopupCurrnetApi;
