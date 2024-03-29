import adminInstance from "../adminBaseApi";

/**
 * @since 2024.03.02
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
        return await adminInstance.get(`/chat/rooms/admin?pageNo=${pageNo}&amount=${amount}`);
    },

    /**
     * 나의 채팅방 메시지 리스트 조회
     *
     * @since 2024.03.02
     * @author 이상민
     */
    getMessages: async (roomId = 0) => {
        return await adminInstance.get(`/chat/rooms/${roomId}`);
    },
}

export default ChatApi;
