import React from "react";
import ChatApi from "../../api/chatApi";
import ChatPage from "../../components/common/Chat/ChatPage";

/**
 * 채팅 페이지 제작
 *
 * @since 2024.03.02
 * @author 이상민
 */
const Chat = () => {
    return (
        <ChatPage
            api={ChatApi}
            title="1:1 채팅상담 목록"
        />
    );
};


export default Chat;
