import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const MyPlanDetailApi = {

    /**
     * 나의 사업계획서 조회
     *
     * @since 2024.02.29
     * @author 이상민
     */
    getPlan: async (planId = 0) => {
        return await userInstance.get(`/plans/${planId}`)
    },
}

export default MyPlanDetailApi;
