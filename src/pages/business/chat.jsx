import React from "react";
import ChatApi from "../../api/chatApi";
import ChatList from "../../components/common/Chat/ChatList";

/**
 * 채팅 페이지 제작
 *
 * @since 2024.03.02
 * @author 이상민
 */
const Chat = () => {
    return (
        <ChatList api={ChatApi} url="/chat" role="user"/>
    );
};

export default Chat;
