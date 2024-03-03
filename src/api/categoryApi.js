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
const CategoryApi = {

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
