import React from "react";
import AdminChatApi from "../../api/administrator/adminChatApi";
import ChatList from "../../components/common/Chat/ChatList";

/**
 * 채팅 페이지 제작
 *
 * @since 2024.03.02
 * @author 이상민
 */
const AdminChat = () => {
    return (
        <ChatList api={AdminChatApi} url="/admin/chat" role="admin"/>
    );
};

export default AdminChat;
