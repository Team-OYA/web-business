import CoinImage from "../../../assets/icon/coin.png"
import Pagination from "../Pagination/Pagination";

/**
 * CheckedPostTable 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function CheckedPostTable() {
    // todo: checkbox 위치 가운데로 고정 및 메인 컬러로 색상 변경
    const props = [
        {
            "title": "‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...",
            "date": "2024.02.01",
            "ad": true,
            "updated": false,
            "withdrawn": false,
        },
        {
            "title": "빤쮸토끼 팝업스토어 개최합니다!!",
            "date": "2024.01.16",
            "ad": false,
            "updated": true,
            "withdrawn": false,
        },
        {
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
                                    <input type="checkbox"/>
                                </td>
                                <td className={`px-6 py-4 ${row.ad ? 'text-gray-text-color-300' : ''}`}>
                                    <div className="flex">
                                        {row.title}
                                        {
                                            row.ad && (
                                                <AdTag/>
                                            )
                                        }
                                    </div>
                                </td>
                                <td className="text-right">
                                    {
                                        row.updated && (
                                            <UpdatedTag text="수정 요청"/>
                                        )
                                    }
                                    {
                                        row.withdrawn && (
                                            <WithdrawnTag text="철회 요청"/>
                                        )
                                    }
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

/**
 * AdTag 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function AdTag() {
    return (
        <span>
            <img src={CoinImage} alt="coin"
                className="w-4"/>
        </span>
    )
}

/**
 * UpdatedTag 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function UpdatedTag(props) {
    return (
        <>
            <button type="button"
                    className="text-updated-button-text-color focus:ring-4 bg-updated-button-color
                    focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center"
                    disabled>
                {props.text}
            </button>
        </>
    )
}

/**
 * WithdrawnTag 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function WithdrawnTag(props) {
    return (
        <>
            <button type="button"
                    className="text-withdrawn-button-text-color focus:ring-4 bg-withdrawn-button-color ml-4
                    focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center"
                    disabled>
                {props.text}
            </button>
        </>
    )
}

export default CheckedPostTable;
