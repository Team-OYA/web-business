import axios from "axios";

import GetTokenFromLocalStorage from "../Common/token";

const Token = GetTokenFromLocalStorage('admin')
if (Token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`
}

/**
 * @since 2024.03.52
 * @author 이상민
 */
const ChatApi = {
    /**
     * 관리자 채팅방 리스트 조회
     *
     * @since 2024.03.02
     * @author 이상민
     */
    getChatRooms: async (pageNo = 0, amount = 10) => {
        return await axios.get(`/api/v1/chat/rooms/admin?pageNo=${pageNo}&amount=${amount}`);
    },
}

export default ChatApi;
