import Token from "./token";
import axios from "axios";

if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.27
 * @author 김유빈
 */
const PlanApi = {

    /**
     * 현대백화점 지점 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getDepartments: async () => {
        return await axios.get(`/api/v1/plans/departments`)
    },

    /**
     * 현대백화점 층수 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getFloors: async () => {
        return await axios.get(`/api/v1/plans/floors`)
    },

    /**
     * 사업계획서 제안
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    save: async (data) => {
        const formData = new FormData()
        formData.append("data",  new Blob([JSON.stringify(data)], {
            type: "application/json"
        }))
        return await axios.post(`/api/v1/plans`, formData, {
            "Content-Type": `multipart/form-data`,
        })
    },

    /**
     * 나의 사업계획서 조회
     *
     * @since 2024.02.29
     * @author 이상민
     */
    getPlan: async (planId = 0) => {
        return await axios.get(`/api/v1/plans/${planId}`)
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
            const response = await axios.post(`/api/v1/plans/${planId}/wait`, null, {
                params: { planId }  // 이 부분을 확인하여 서버에서 요구하는 형식에 맞춰 수정
            });
            return response;
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
        return await axios.post(`/api/v1/plans/${planId}/approve`)
    },

    /**
     * 사업계획서 거절 기능 구현
     *
     * @since  2024.02.29
     * @author 이상민
     */
    postDeny: async (planId = 0) => {
        return await axios.post(`/api/v1/plans/${planId}/deny`)
    },
}

export default PlanApi;
