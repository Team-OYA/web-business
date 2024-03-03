import {useState} from "react";

/**
 * MultipleDropdown 컴포넌트 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function MultipleDropdown({title, data, setFirst, setSecond}) {
    const [selectedFirstItem, setSelectedFirstItem] = useState(null)
    const [selectedSecondItem, setSelectedSecondItem] = useState(null)

    const handleSelectedFirstItem = (item, code) => {
        setSelectedFirstItem(item)
        if (setFirst) {
            setFirst(code)
        }
    };
    const handleSelectedSecondItem = (item) => {
        setSelectedSecondItem(item)
        if (setSecond) {
            setSecond(item)
        }
    };

    return (
        <div className="flex flex-col items-start justify-center space-y-4 md:space-y-4 mb-4">
            <label htmlFor="default-input"
                   className="block mb-2 text-sm font-medium text-gray-900">
                {title}
            </label>
            <div id="default-input" className="flex shadow mr-24">
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg w-52 h-44 overflow-y-scroll">
                    <ul className="py-2 text-sm text-gray-700">
                        {data.map((row, index) => (
                            <li key={index}>
                                <button
                                    className="block px-4 py-2 w-full text-left"
                                    style={{backgroundColor: selectedFirstItem === row.data ? "#F8F8F8" : "white"}}
                                    onClick={() => handleSelectedFirstItem(row.data, row.code)}>
                                    {row.description}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg w-52 h-44 overflow-y-scroll">
                    <ul className="py-2 text-sm text-gray-700">
                        {selectedFirstItem &&
                            selectedFirstItem.map((row, index) => (
                                <li key={index}>
                                    <button
                                        className="block px-4 py-2 w-full text-left"
                                        style={{backgroundColor: selectedSecondItem === row.code ? "#F8F8F8" : "white"}}
                                        onClick={() => handleSelectedSecondItem(row.code)}>
                                        {row.description}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MultipleDropdown;
