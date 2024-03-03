import userInstance from "../../userBaseApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
const EntranceStatusesApi = {

    /**
     * 사업계획서 진행 단계 목록 조회
     *
     * @since 2024.02.27
     * @author 김유빈
     */
    getEntranceStatuses: async () => {
        return await userInstance.get(`/plans/entranceStatus`)
    },
}

export default EntranceStatusesApi;
