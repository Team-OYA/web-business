import {useState} from "react";

/**
 * MultipleDropdown 컴포넌트 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function MultipleDropdown(props) {
    // todo: title 이 data 위로 위치
    const [selectedItem, setSelectedItem] = useState(null)

    const clickItem = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <label htmlFor="default-input"
                   className="block mb-2 text-sm font-medium text-gray-900">
                {props.title}
            </label>
            <div id="default-input" className="flex shadow mr-auto">
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 h-44 overflow-y-scroll">
                    <ul className="py-2 text-sm text-gray-700">
                        {
                            props.data.map((row, index) => (
                                <li key={index}>
                                    <button
                                        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                                        onClick={() => clickItem(row.data)}>
                                        {row.description}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 h-44 overflow-y-scroll">
                    <ul className="py-2 text-sm text-gray-700">
                        {
                            selectedItem && (
                                selectedItem.map((row, index) => (
                                    <li key={index}>
                                        <button
                                            className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                                            {row.description}
                                        </button>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MultipleDropdown;
