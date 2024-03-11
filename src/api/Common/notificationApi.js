import userBaseApi from "../userBaseApi";
import adminBaseApi from "../adminBaseApi";


/**
 * @since 2024.03.08
 * @author 이상민
 */
const NotificationApi = {
    /**
     * 토큰 저장 알림
     *
     * @since 2024.03.08
     * @author 이상민
     */
    saveNotification: async (token) => {
        return await userBaseApi.post(`/notification/new`, { token });
    },

    /**
     * 토큰 저장 알림
     *
     * @since 2024.03.08
     * @author 이상민
     */
    saveAdminNotification: async (token) => {
        return await adminBaseApi.post(`/notification/new`, { token });
    },
}

export default NotificationApi;
