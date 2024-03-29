import ChatApi from "../../../api/chatApi";
import React, {useEffect, useRef, useState} from "react";
import GetTokenFromLocalStorage from "../../../api/Common/token";
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import MeChatMessage from "../../common/Chat/MeChatMessage";
import OtherChatMessage from "../../common/Chat/OtherChatMessage";
import '../../common/Chat/ChatApp.css';

/**
 * 채팅방 컴포넌트
 *
 * @since 2024.03.02
 * @author 이상민
 */
const ChatRoom= ({selectedChatRoom, setSelectedChatRoom}) => {

    console.log("선택된 채팅방:", selectedChatRoom);

    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const roomId = selectedChatRoom;


    const role = 'user'
    const messagesContainerRef = useRef(null);
    const token = GetTokenFromLocalStorage('role')

    const [chatRoomDetail, setChatRoomDetail] = useState([]);

    /**
     * WebSocket 연결
     *
     * @since 2024.03.03
     * @author 이상민
     */
    useEffect(() => {
        const baseUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_CHAT_API_PREFIX}`
        const socket = new SockJS(baseUrl);
        const stomp = Stomp.over(socket);
        setStompClient(stomp);
        // 고유한 ID 생성
        const uniqueId = `sub-${Math.random().toString(36).substr(2, 9)}`;
        stomp.connect({ Authorization: `Bearer ${token}` }, (frame) => {
            console.log("연결 성공!", frame);
            console.log("1 : " + role)

            // 2. 특정 채팅방에 구독
            stomp.subscribe(`/topic/messages`, (message) => {
                const newMessage = JSON.parse(message.body);

                if(newMessage.role === role){
                    newMessage.checkedMe = true;
                }else{
                    newMessage.checkedMe = false;
                }

                // 기존 메시지와 새 메시지를 합쳐서 상태 업데이트
                // setMessages((prevMessages) => [...prevMessages, newMessage]);

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
            console.log(response)

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
                role : role,
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

    const handleGoBack = () => {
        setSelectedChatRoom(null);
    };

    return (
        <div className="rounded-rectangle">
            <div className="flex items-center" style={{
                marginTop : '15px',
                marginLeft : '15px',
                marginBottom : '3px',
            }}>
                <button className="back-button" onClick={handleGoBack}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m15 19-7-7 7-7"/>
                    </svg>
                </button>
                <h2 className="text-sm font-semibold bottom:0 flex-grow ml-2">
                    {chatRoomDetail.name}
                </h2>
            </div>

            <div
                id="messagesContainer"
                ref={messagesContainerRef}
                className="h-[475px] w-[325px] overflow-y-auto mb-4
                scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200"
                style={{
                    margin: '16px'
                }}>

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

            <div className="bottom-0 items-center gap-2"
                 style={{marginTop: '8px', textAlign: 'center', justifyContent: 'center'}}>
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="메시지를 입력해주세요."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="border p-1 rounded-full w-80 border-gray-"
                        style={{fontSize: '12px', padding: '6px'}}
                    />
                    <button
                        onClick={sendMessage}
                        className="text-black px-1 py-1
                        rounded-full hover:bg-blue-600 absolute right-0 top-0 bottom-0 mt-auto mb-auto"
                        style={{fontSize: '15px', marginRight : '20px '}}
                    >
                        Send
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ChatRoom;
