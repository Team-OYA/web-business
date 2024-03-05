import React, {useState} from "react";
import TableHeader from "../common/Table/TableHeader";
import TableRow from "../common/Table/TableRow";
import Modal from "react-modal";
import ChatRoomDetail from "./ChatRoomDetail";

/**
 * Table 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const ChatTable = ({ headerTitles, sampleData }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedChatRoomId, setSelectedChatRoomId] = useState(null);

    const handleRowClick = (id) => {
        console.log("테이블 : " + id)

        setSelectedChatRoomId(id);
        setModalIsOpen(true);
    };

    const renderTableBody = (sampleData) => (
        <tbody>
        {sampleData.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} onRowClick={() => handleRowClick(rowData[0])} />
        ))}
        </tbody>
    );

    return (
        <div className="relative overflow-x-auto table-container sm:rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <TableHeader headerTitles={headerTitles} />
                {renderTableBody(sampleData)}
            </table>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="ChatRoomDetail Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '80%', // 필요에 따라 최대 너비 조정
                        padding: 0,
                        borderRadius: 25,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                }}
            >
                {selectedChatRoomId && (
                    <ChatRoomDetail selectedChatRoomId={selectedChatRoomId} setModalIsOpen={setModalIsOpen} />
                )}
            </Modal>
        </div>
    );
};

export default ChatTable;
