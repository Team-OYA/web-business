import axios from "axios";
import Token from "./token";

if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.02.27
 * @author 김유빈
 */
const CategoryApi = {

    /**
     * 카테고리 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getCategories: async () => {
        return await axios.get(`/api/v1/plans/categories`);
    },

    /**
     * 사업계획서 진행 단계 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getEntranceStatuses: async () => {
        return await axios.get(`/api/v1/plans/entranceStatus`)
    },

    /**
     * 나의 사업계획서 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getMyPlans: async (category = "", entranceStatus = "", pageNo = 0, amount = 10) => {
        return await axios.get(`/api/v1/plans/me?category=${category}&entranceStatus=${entranceStatus}&pageNo=${pageNo}&amount=${amount}`)
    },
    /**
     * 관리자사업계획서 리스트 조회
     *
     * @since 2024.02.28
     * @author 이상민
     */
    getAllPlan: async (category = "", entranceStatus = "",  pageNo = 0, amount = 10) => {
        return await axios.get(`/api/v1/plans?category=${category}&entranceStatus=${entranceStatus}&pageNo=${pageNo}&amount=${amount}`);
    },
};

export default CategoryApi;
