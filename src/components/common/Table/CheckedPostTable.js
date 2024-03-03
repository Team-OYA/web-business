import CoinImage from "../../../assets/icon/coin.png"
import Pagination from "../Pagination/Pagination";
import {useState} from "react";

/**
 * CheckedPostTable 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function CheckedPostTable({posts}) {
    const [selectedPostIndexes, setSelectedPostIndexes] = useState([]);
    const handleCheckboxChange = (index) => {
        let updatedIndexes = [];
        if (selectedPostIndexes.includes(index)) {
            updatedIndexes = selectedPostIndexes.filter((i) => i !== index);
        } else {
            updatedIndexes = [index];
        }
        setSelectedPostIndexes(updatedIndexes);
    };

    return (
        <>
            <div className="relative overflow-x-auto">
                <p className="mb-4 text-sm">선택 {selectedPostIndexes.length} / 1</p>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                    {
                        posts.map((row, index) => (
                            <tr className="bg-white border-b text-gray-text-color-700">
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedPostIndexes.includes(index)}
                                        onChange={() => handleCheckboxChange(index)}/>
                                </td>
                                <td className="px-6 py-4">
                                    {row.title}
                                </td>
                                <td className="py-4 text-right">
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
