import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const DepartmentsApi = {

    /**
     * 현대백화점 지점 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getDepartments: async () => {
        return await userInstance.get(`/plans/departments`)
    },

    /**
     * 현대백화점 층수 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getFloors: async () => {
        return await userInstance.get(`/plans/floors`)
    },
}

export default DepartmentsApi;
