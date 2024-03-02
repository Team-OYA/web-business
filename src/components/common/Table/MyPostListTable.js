import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";

function MyPostListTable() {
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const itemsPerPage = 5;

    const props = [
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
        },
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
        },
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
        },
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
        },
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
        },
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
        },
    ]

    const displayedData = props.slice((currentPageIndex - 1) * itemsPerPage, (currentPageIndex) * itemsPerPage);

    const setPage = (pageIndex) => {
        setCurrentPageIndex(pageIndex);
    }



    return (
        <>
            <div className="flex flex-col w-full px-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <tbody>
                    {
                        displayedData.map((row, index) => (
                            <tr key={index} className="bg-white border-b text-gray-700">
                                <td>
                                    <div className="flex">
                                        {row.id}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex">
                                        {row.title}
                                    </div>
                                </td>
                                <td className="py-4 text-right">
                                    {row.date}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Pagination total={props.length} limit={itemsPerPage} page={currentPageIndex} setPage={setPage}/>
            </div>
        </>
    )
}

export default MyPostListTable;
