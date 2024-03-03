import adminInstance from "../../adminBaseApi";

/**
 * @since 2024.03.01
 * @author 이상민
 */
const AdminPlanApi = {
    /**
     * 나의 사업계획서 조회
     *
     * @since 2024.02.29
     * @author 이상민
     */
    getPlan: async (planId = 0) => {
        return await adminInstance.get(`/plans/${planId}`)
    },

    /**
     * 사업계획서 대기 기능 구현
     *
     * @since 2024.02.29
     * @param {number} planId - 대기 기능을 적용할 사업계획서의 ID
     * @returns {Promise} Axios Promise
     * @throws {Error} AxiosError
     * @author 이상민
     */
    postWait: async (planId = 0) => {
        try {
            return await adminInstance.post(`/plans/${planId}/wait`, null, {
                params: {planId}  // 이 부분을 확인하여 서버에서 요구하는 형식에 맞춰 수정
            });
        } catch (error) {
            throw error;
        }
    },

    /**
     * 사업계획서 승인 기능 구현
     *
     * @since 2024.02.29
     * @author 이상민
     */
    postApprove: async (planId = 0) => {
        return await adminInstance.post(`/plans/${planId}/approve`)
    },

    /**
     * 사업계획서 거절 기능 구현
     *
     * @since  2024.02.29
     * @author 이상민
     */
    postDeny: async (planId = 0) => {
        return await adminInstance.post(`/plans/${planId}/deny`)
    },
}

export default AdminPlanApi;
