import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.10
 * @author 김유빈
 */
const WithdrawPlan = {

    /**
     * 사업계획서 철회
     *
     * @since 2024.03.10
     * @author 김유빈
     */
    withdraw: async (planId) => {
        return await  userInstance.post(`/plans/${planId}/withdraw`)
    }
}

export default WithdrawPlan;
