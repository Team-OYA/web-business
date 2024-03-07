import React, {useEffect, useState} from 'react';
import '../../common/Chat/ChatApp.css';
import Button from "../../common/Button/Button";
import FormattedTime from "../../common/Chat/FormattedTime";

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
                <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '15px'}}>대화</h1>
                {data && data.map((chatRoom, index) => (
                    <div
                        className="chat-room flex items-center justify-between
                        p-2 rounded-md transition duration-300 ease-in-out hover:rounded-xl hover:w-full"
                        key={index} onClick={() => handleChatRoomClick(chatRoom)}>
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 object-cover rounded-full mr-4"
                                src={process.env.PUBLIC_URL + '/logo_black.png'}
                                alt="기본 이미지"
                            />
                            <div>
                                <p className="text-sm text-gray-700">{chatRoom[2]}</p>
                            </div>
                        </div>
                        <div>
                            <FormattedTime time={chatRoom[3]}/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bottom-nav">
                <Button text={<span className="flex items-center justify-center">
                                새 문의하기
                                <span className="ms-2">
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </span>
                            </span>} />
            </div>

            <button className="close-button" onClick={closeModal}>
                닫기
            </button>
        </div>
    );
};

export default ChatList;
