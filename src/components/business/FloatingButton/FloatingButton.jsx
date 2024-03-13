import React, {useState} from 'react';
import './FloatingButton.css';
import Modal from 'react-modal';
import ChatApi from "../../../api/chatApi";
import ChatRoom from "../../business/Chat/ChatRoom";
import ChatList from "../../business/Chat/ChatList";
import CreateRoomForm from "../Chat/CreateRoomForm";

/**
 * FloatingButton 컴포넌트
 *
 * @since 2024.03.04
 * @author 이상민
 */
const FloatingButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);
    const [isCreatingRoom, setIsCreatingRoom] = useState(false);

    const openModal = () => {
        const button = document.querySelector('.floating-button');
        if (button) {
            const rect = button.getBoundingClientRect();
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
        document.body.style.overflow = 'auto';
        setSelectedChatRoom(null);
    };

    const handleChatRoomClick = (chatRoom) => {
        console.log("chat room id : " + chatRoom)
        setSelectedChatRoom(chatRoom);
    };

    const handleCreateRoomButtonClick = () => {
        setIsCreatingRoom(true);
    };

    const handleCloseCreateRoom = () => {
        setIsCreatingRoom(false);
    };

    return (
        <>
            <div className="fixed bottom-0 right-0 mb-4 mr-8">
                <button className="floating-button" onClick={openModal}>
                    <svg className="w-12 h-9 text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 10.5h0m-4 0h0m-4 0h0M5 5h14c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-6.6a1 1 0 0 0-.7.3L8.8 19c-.3.3-.8 0-.8-.4V17c0-.6-.4-1-1-1H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z"/>
                    </svg>
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Floating Button Modal"
                className="floating-button-modal"
                overlayClassName="custom-overlay-class"
                portalClassName="custom-portal-class"
                shouldCloseOnOverlayClick={true} // 모달 이외의 영역 클릭시 모달 닫힘 설정
                shouldCloseOnEsc={true}
            >
                {/* 선택된 채팅방이 없고, 새 방 생성 폼이 열리지 않은 경우에만 ChatList를 모달 안에 렌더링 */}
                {!selectedChatRoom && !isCreatingRoom && (
                    <ChatList
                        api={ChatApi}
                        url="/chat"
                        role="user"
                        onChatRoomClick={handleChatRoomClick}
                        onCreateRoomClick={handleCreateRoomButtonClick}
                        closeModal={closeModal}
                    />
                )}

                {/* 선택된 채팅방이 있을 때 ChatRoomDetail을 표시 */}
                {selectedChatRoom && <ChatRoom selectedChatRoom={selectedChatRoom} setSelectedChatRoom={setSelectedChatRoom}/>}

                {/* 새 방 생성 폼 */}
                {isCreatingRoom && <CreateRoomForm onClose={handleCloseCreateRoom} />}
            </Modal>
        </>
    );
};

export default FloatingButton;
