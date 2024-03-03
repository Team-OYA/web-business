import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const MyPlansApi = {

    /**
     * 나의 사업계획서 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getMyPlans: async (category = "", entranceStatus = "", pageNo = 0, amount = 10) => {
        return await userInstance.get(`/plans/me?category=${category}&entranceStatus=${entranceStatus}&pageNo=${pageNo}&amount=${amount}`)
    },
}

export default MyPlansApi;
