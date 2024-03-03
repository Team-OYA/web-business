import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
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
        return await userInstance.get(`/plans/categories`);
    },
}

export default CategoryApi;
