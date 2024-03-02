import React from "react";

/**
 * Table 헤더 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const TableHeader = ({headerTitles}) => {
    return (
        <thead className="text-sm text-gray-text-color-700 bg-gray-100 text-center dark:bg-gray-700 dark:text-gray-400">
        <tr>
            {headerTitles.map((title, index) => (
                <th key={index} scope="col" className="p-3">
                    {title}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;
