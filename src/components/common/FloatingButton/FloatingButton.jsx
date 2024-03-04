import React, {useState} from 'react';
import './FloatingButton.css'; // 스타일 파일을 추가합니다.
import Modal from 'react-modal';
import ChatList from "../Chat/ChatList";

const FloatingButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

    const openModal = () => {
        const button = document.querySelector('.floating-button');
        if (button) {
            const rect = button.getBoundingClientRect();
            setButtonPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
            console.log('Button Position:', buttonPosition);
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
    };

    return (
        <>
            {/*<button className="floating-button" onClick={openModal}>*/}
            {/*    +*/}
            {/*</button>*/}

            <div className="fixed bottom-0 right-0 mb-4 mr-4">
                <button
                    id="open-chat"
                    onClick={openModal}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                     Chat
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
                <div style={{
                    width: '300px',
                    height: '500px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <ChatList onClose={onclick}/>
                </div>
            </Modal>
        </>
    );
};

export default FloatingButton;
