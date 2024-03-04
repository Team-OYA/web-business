import React, {useEffect, useRef, useState} from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { useParams } from "react-router-dom";
import GetTokenFromLocalStorage from "../../../api/Common/token";
import ChatApi from "../../../api/chatApi";
import MeChatMessage from "./MeChatMessage";
import OtherChatMessage from "./OtherChatMessage";

/**
 * 채팅방
 *
 * @since 2024.03.03
 * @author 이상민
 */
const WebSocketConnect = ({role}) => {
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { roomId } = useParams();

    const messagesContainerRef = useRef(null);
    const token = GetTokenFromLocalStorage(role)

    const [chatRoomDetail, setChatRoomDetail] = useState([]);

    /**
     * WebSocket 연결
     *
     * @since 2024.03.03
     * @author 이상민
     */
    useEffect(() => {
        const socket = new SockJS(`http://15.164.236.13:8080/ws`);
        const stomp = Stomp.over(socket);
        setStompClient(stomp);
        // 고유한 ID 생성
        const uniqueId = `sub-${Math.random().toString(36).substr(2, 9)}`;
        stomp.connect({ Authorization: `Bearer ${token}` }, (frame) => {
            console.log("연결 성공!", frame);
            // 2. 특정 채팅방에 구독
            stomp.subscribe(`/topic/messages`, (message) => {
                const newMessage = JSON.parse(message.body);

                newMessage.checkedMe = true;

                // 기존 메시지와 새 메시지를 합쳐서 상태 업데이트
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                // 새 메시지가 현재 채팅방에 대한 것인지 확인
                if (roomId === newMessage.roomId) {
                    showMessage(newMessage);
                }
            }, { id: uniqueId }); // 고유한 ID로 구독
        }, (error) => {
            console.error("연결 실패:", error);
        });
        // 3. 이전 메시지 불러오기
        loadPreviousMessages();
        return () => {
            stomp.disconnect();
        };
    }, [roomId]);

    useEffect(() => {
        scrollToBottom(); // 새로운 메시지가 추가될 때마다 스크롤을 최하단으로 이동
    }, [messages]);

    const loadPreviousMessages = async () => {
        try {
            const response = await ChatApi.getMessages(roomId);
            const data = response.data;
            setMessages(data?.data?.chatMessageDetailResponse || []);
            setChatRoomDetail(data?.data?.chatRoomDetailResponse || []);
        } catch (error) {
            console.error("이전 메시지 불러오기 실패:", error);
        }
    };

    /**
     * 메시지 전송
     *
     * @since 2024.03.03
     * @author 이상민
     */
    const sendMessage = () => {
        if (newMessage.trim() !== '' && stompClient) {
            const chatMessageRequest = {
                roomId: roomId,
                message: newMessage,
                sendingTime: new Date().toISOString(),
            };

            // 'send' 메서드의 옵션으로 'Authorization' 헤더를 설정
            const headers = { Authorization: `Bearer ${token}` };

            // 헤더를 포함하여 메시지를 전송
            stompClient.send("/app/sendMessage", headers, JSON.stringify(chatMessageRequest));

            // 메시지 입력을 지웁니다
            setNewMessage('');
        }
    };

    /**
     * 메시지 보여주기
     *
     * @since 2024.03.03
     * @author 이상민
     */
    const showMessage = (message) => {
        const formattedMessage = {
            sender: message.senderNickname,
            sendingTime: message.sendingTime,
            message: message.message,
            checkedMe: message.checkedMe,
        };

        console.log("포맷 :: " + formattedMessage);

        setMessages((prevMessages) => [...prevMessages, formattedMessage]);
        scrollToBottom();
    };

    /**
     * 최하단으로 스크롤 이동
     *
     * @since 2024.03.03
     * @author 이상민
     */
    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    return (
        <div className="h-dvh">
            <h2 className="text-2xl font-semibold mb-4">{chatRoomDetail.name}</h2>
            <div
                id="messagesContainer"
                ref={messagesContainerRef}
                className="h-[420px] overflow-y-auto mb-4"
            >
                <h3 className="text-lg font-semibold mb-2">Messages:</h3>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>
                            {message.checkedMe === true ? (
                                <MeChatMessage nickname={message.senderNickname} time={message.sendingTime}
                                               text={message.message}/>
                            ) : (
                                <OtherChatMessage
                                    nickname={message.senderNickname}
                                    time={message.sendingTime}
                                    text={message.message}
                                />
                            )}
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex bottom-0 items-center gap-2">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow border p-2 rounded"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default WebSocketConnect;
