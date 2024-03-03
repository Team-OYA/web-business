import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const MyPopupApi = {

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

export default MyPopupApi;
