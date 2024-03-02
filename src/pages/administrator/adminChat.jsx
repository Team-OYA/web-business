import React from "react";
import AdminChatApi from "../../api/administrator/adminChatApi";
import ChatPage from "../../components/common/Chat/ChatPage";

/**
 * 채팅 페이지 제작
 *
 * @since 2024.03.02
 * @author 이상민
 */
const AdminChat = () => {
    return (
        <ChatPage
            api={AdminChatApi}
            title="1:1 채팅상담 목록"
        />
    );
};
export default AdminChat;
