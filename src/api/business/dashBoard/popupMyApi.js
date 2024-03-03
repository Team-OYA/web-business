import userInstance from "../../userBaseApi";

/**
     * 카테고리 분석 통계
     *
     * @since 2024.03.02
     * @author 이승민
     */

const PopupMyApi = {
    popupMy: async () => {
        try {
            return await userInstance.get('popups',
                {
                    params: {
                        sort: 'me',
                        pageNo: 0,
                        amount: 100,
                    }
                }
            )
        } catch (error) {
            console.error('내 팝업스토어 조회 오류:', error);
        }
    },
}

export default PopupMyApi;
