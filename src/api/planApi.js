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
}

export default PlanApi;
