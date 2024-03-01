import Pagination from "../Pagination/Pagination";

/**
 * MyPostListTable 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */

function MyPostListTable() {
    const props = [
        {
            "id": 1,
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
            "ad": true,
            "updated": false,
            "withdrawn": false,
        },
        {
            "id": 2,
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
            "ad": false,
            "updated": true,
            "withdrawn": false,
        },
        {
            "id": 3,
            "title": "짱재 팝업스토어 개최합니다!!",
            "date": "2023.11.30",
            "ad": false,
            "updated": false,
            "withdrawn": true,
        },
    ]
    return (
        <>
            <div className="relative overflow-x-auto">
                <p className="mb-4 text-sm">선택 0 / 1</p>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                    {
                        props.map((row, index) => (
                            <tr className="bg-white border-b text-gray-text-color-700">
                                <td>
                                    <div className="flex">
                                        {row.id}
                                    </div>
                                </td>
                                <td className={`px-6 py-4 ${row.ad ? 'text-gray-text-color-300' : ''}`}>
                                    <div className="flex">
                                        {row.title}
                                    </div>
                                </td>
                                <td className={`py-4 text-right ${row.ad ? 'text-gray-text-color-300' : ''}`}>
                                    {row.date}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Pagination />
            </div>
        </>
    )
}

export default MyPostListTable;