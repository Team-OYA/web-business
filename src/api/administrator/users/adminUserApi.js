import adminInstance from "../../adminBaseApi";

/**
 * @since 2024.02.25
 * @author 이상민
 */
const AdminUserApi = {
    /**
     * 일반사용자 리스트 불러오기
     *
     * @since 2024.02.25
     * @author 이상민
     */
    getUsers: async (pageNo = 0, amount = 10) => {
        return await adminInstance.get(`/admin/users?type=user&pageNo=${pageNo}&amount=${amount}`);
    },
    /**
     * 사업체 리스트 불러오기
     *
     * @since 2024.02.25
     * @author 이상민
     */
    getBusiness: async (pageNo = 0, amount = 10) => {
        return await adminInstance.get(`/admin/users?type=business&pageNo=${pageNo}&amount=${amount}`);
    },
};

export default AdminUserApi;
