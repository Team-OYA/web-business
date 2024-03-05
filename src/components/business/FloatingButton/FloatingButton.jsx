import React, {useState} from 'react';
import './FloatingButton.css'; // 스타일 파일을 추가합니다.
import Modal from 'react-modal';
import ChatApi from "../../../api/chatApi";
import ChatRoom from "../../business/Chat/ChatRoom";
import ChatList from "../../business/Chat/ChatList";

/**
 * FloatingButton 컴포넌트
 *
 * @since 2024.03.04
 * @author 이상민
 */
const FloatingButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    const openModal = () => {
        const button = document.querySelector('.floating-button');
        if (button) {
            const rect = button.getBoundingClientRect();
            setButtonPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        }
        setModalIsOpen(true);
    };

    /**
     * 모달 닫을 때 사용
     *
     * @since 2024.03.04
     * @author 이상민
     */
    const closeModal = () => {
        setModalIsOpen(false);
        // 모달이 닫힐 때 선택된 채팅방 정보 초기화
        setSelectedChatRoom(null);
    };

    const handleChatRoomClick = (chatRoom) => {
        console.log("chat room id : " + chatRoom)
        setSelectedChatRoom(chatRoom);
    };

    return (
        <>
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
                <button className="floating-button" onClick={openModal}>
                    +
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Floating Button Modal"
                className="floating-button-modal"
                style={{
                    top: buttonPosition.top,
                    left: buttonPosition.left,
                    position: 'absolute',
                }}
            >
                {/* 선택된 채팅방이 없을 때에만 ChatList를 모달 안에 렌더링 */}
                {!selectedChatRoom && <ChatList api={ChatApi} url="/chat" role="user" onChatRoomClick={handleChatRoomClick} closeModal={closeModal}/>}

                {/* 선택된 채팅방이 있을 때 ChatRoomDetail을 표시 */}
                {selectedChatRoom && <ChatRoom selectedChatRoom={selectedChatRoom} setSelectedChatRoom={setSelectedChatRoom}/>}
            </Modal>
        </>
    );
};

export default FloatingButton;
