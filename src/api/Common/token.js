/**
 * 토큰 관리
 *
 * @since 2024.03.01
 * @author 이상민
 */
const GetTokenFromLocalStorage = (role) => {
    console.log(role)

    try {
        const tokenKey = role === 'admin' ? 'adminToken' : 'userToken';
        const token = localStorage.getItem(tokenKey);
        console.log(tokenKey)

        if (token) {
            return token;
        } else {
            console.error('토큰이 없습니다.');
            return null;
        }
    } catch (error) {
        console.error('로컬 스토리지에서 토큰을 가져오는 중 오류 발생:', error);
        return null;
    }
};

export default GetTokenFromLocalStorage;
