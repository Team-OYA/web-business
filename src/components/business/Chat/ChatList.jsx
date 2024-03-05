import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../common/Chat/ChatApp.css';

/**
 * 채팅 리스트 컴포넌트
 *
 * @since 2024.03.02
 * @author 이상민
 */
const ChatList = ({api, onChatRoomClick, closeModal}) => {

    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const handleChatRoomClick = (chatRoom) => {
        onChatRoomClick(chatRoom[0]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getChatRooms(page - 1, limit);
                const mappedData = response.data.data.list.map((chatRoom, index) => {
                    const sequenceNumber = index + 1 + (page - 1) * limit;
                    return {
                        pkId: chatRoom.chatRoomId || "-",
                        sequenceNumber,
                        title: chatRoom.name ? chatRoom.name : "-",
                        createdDate: chatRoom.createdDate ? chatRoom.createdDate : "-",
                        modifiedDate: chatRoom.modifiedDate ? chatRoom.modifiedDate : "-",
                    };
                });
                setData( mappedData.map((chatRoom) => [...Object.values(chatRoom)]));
            } catch (error) {
                console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, [page, limit]);

    return (
        <div className="rounded-rectangle">
            <div className="content">
                <h1 style={{fontSize: '24px', fontWeight: 'bold' ,  marginBottom:'15px'}}>대화</h1>
                {data && data.map((chatRoom, index) => (
                    <div className="chat-room" key={index} onClick={() => handleChatRoomClick(chatRoom)}>
                        <p>{chatRoom[0]} {chatRoom[2]} {chatRoom[3]}{' '}</p>
                        <br/>
                    </div>
                ))}
            </div>
            <div className="bottom-nav">
                <nav>
                    <ul>
                        <li>홈</li>
                        <li>대화</li>
                        <li>설정</li>
                    </ul>
                </nav>
            </div>
            <button className="close-button" onClick={closeModal}>
                닫기
            </button>
        </div>
    );
};

export default ChatList;
