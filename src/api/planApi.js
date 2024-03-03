import axios from "axios";
import GetTokenFromLocalStorage from "./Common/token";

const Token = GetTokenFromLocalStorage('user')
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
    save: async (data, file = null) => {
        const formData = new FormData()
        formData.append("data",  new Blob([JSON.stringify(data)]), {
            type: "application/json"
        })
        formData.append("file", file)
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
}

export default PlanApi;
