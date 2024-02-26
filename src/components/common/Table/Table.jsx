import React from "react";

/**
 * Table 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Table = ({headerTitles, sampleData }) => {
    const renderTableHeader = () => {
      return (
        <thead className="text-sm text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerTitles.map((title, index) => (
              <th key={index} scope="col" className="px-2 py-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
      );
    };
    const renderTableRow = (rowData) => {
      if (rowData && rowData.length > 0) {
        return (
          <tr className="text-sm bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {rowData.map((data, index) => (
              <td key={index} className="px-2 py-3 bg-white">
                {data}
              </td>
            ))}
          </tr>
        );
      } else {
        return null; 
      }
    };
  
    const renderTableBody = (sampleData) => {
      return <tbody>
        {sampleData.map((rowData, index) => renderTableRow(rowData))
        }</tbody>;
    };
  
    return (
        <div className="relative overflow-x-auto shadow-md table-container sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            {renderTableHeader(headerTitles)}
            {renderTableBody(sampleData)}
          </table>
        </div>
      );
  };
  
  export default Table;
