import React from "react";

/**
 * Table Row 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const TableRow = ({ rowData, onRowClick }) => {
    if (rowData && rowData.length > 0) {
        return (
            <tr
                className="text-sm text-gray-text-color-700 bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                onClick={onRowClick} // 행 클릭 시 이벤트 추가
                style={{ cursor: 'pointer' }} // 커서를 포인터로 변경하여 사용자에게 클릭 가능성을 나타냄
            >
                {rowData.slice(1).map((data, index) => (
                    <td key={index} className="p-4 bg-white">
                        {data}
                    </td>
                ))}
            </tr>
        );
    } else {
        return null;
    }
};

export default TableRow;