import userInstance from "../../userBaseApi";

/**
     * 카테고리 분석 통계
     *
     * @since 2024.03.02
     * @author 이승민
     */

const UserStatisticsApi = {
    categoryStatistics: async (startDate, endDate, category) => {
        try {
            return await userInstance.get('communities/statistics')
        } catch (error) {
            console.error('카테고리 분석 통계 오류:', error);
            throw error;
        }
    },
}

export default UserStatisticsApi;
