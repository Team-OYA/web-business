import userInstance from "../../userBaseApi";

/**
     * 팝업스토어 랭킹 조회
     *
     * @since 2024.03.02
     * @author 이승민
     */

const PopupRankingApi = {
    popupRanking: async () => {
        try {
            return await userInstance.get('popups/top')
        } catch (error) {
            console.error('팝업스토어 랭킹 조회 오류:', error);
        }
    },
}

export default PopupRankingApi;
