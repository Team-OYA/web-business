import userInstance from "../userBaseApi";

/**
 * @since 2024.03.01
 * @author 이상민
 */
const AuthApi = {
    /**
     * 로그인
     *
     * @since 2024.02.29
     * @author 이상민
     */
    login: async (email, password) => {
        try {
            return await userInstance.post('/login', {
                email: email,
                password: password,
            });
        } catch (error) {
            console.error('로그인 오류:', error);
            throw error;
        }
    },
}

export default AuthApi;
