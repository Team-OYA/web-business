import axios from "axios";
import Token from "./Common/token";
import userInstance from "./userBaseApi";

if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.29
 * @author 김유빈
 */
const PaymentApi = {

    /**
     * 구매자 정보 조회
     *
     * @since 2024.03.02
     * @author 김유빈
     */
    getBuyer: async () => {
        return await userInstance.get(`/ad/users`)
    },

    /**
     * 토스페이 결제 승인 요청
     *
     * @since 2024.02.29
     * @author 김유빈
     */
    confirmTossPay: async (orderId, postId, postType, amount) =>  {
        return await userInstance.post(`/payments/toss/confirm`, {
            orderId: orderId,
            postId: postId,
            postType: postType,
            amount: amount
        })
    },
};

export default PaymentApi;
