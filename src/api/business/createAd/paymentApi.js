import axios from "axios";
import Token from "../../Common/token";
import userInstance from "../../userBaseApi";

if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.29
 * @author 김유빈
 */
const PaymentApi = {

    /**
     * 토스페이 결제 승인 요청
     *
     * @since 2024.02.29
     * @author 김유빈
     */
    confirmTossPay: async (data, file = null) => {
        const formData = new FormData();
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json;charset=UTF-8" }));

        if (file !== null) {
            formData.append("file", file);
        }

        return await userInstance.post(`/payments/toss/confirm`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
};

export default PaymentApi;
