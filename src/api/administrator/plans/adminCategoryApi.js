import axios from "axios";
import GetTokenFromLocalStorage from "../../Common/token";
import adminInstance from "../../adminBaseApi";

const Token = GetTokenFromLocalStorage('admin')
if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.03.01
 * @author 이상민
 */
const AdminCategoryApi = {
    /**
     * 관리자사업계획서 리스트 조회
     *
     * @since 2024.02.28
     * @author 이상민
     */
    getAllPlan: async (category = "", entranceStatus = "",  pageNo = 0, amount = 10) => {
        return await adminInstance.get(`/plans?category=${category}&entranceStatus=${entranceStatus}&pageNo=${pageNo}&amount=${amount}`);
    },
};

export default AdminCategoryApi;
