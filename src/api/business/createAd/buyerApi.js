import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const BuyerApi = {

    /**
     * 구매자 정보 조회
     *
     * @since 2024.03.02
     * @author 김유빈
     */
    getBuyer: async () => {
        return await userInstance.get(`/ad/users`)
    },
}

export default BuyerApi;
