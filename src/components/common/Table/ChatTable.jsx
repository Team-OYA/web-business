import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

/**
 * Chat Table 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const ChatTable = ({ headerTitles, sampleData }) => {

    const handleRowClick = (id) => {
        window.open(`http://localhost:8080/chat/room/${id}`, '_blank');
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
                <TableHeader headerTitles = {headerTitles}/>
                {renderTableBody(sampleData)}
            </table>
        </div>
    );
};

export default ChatTable;