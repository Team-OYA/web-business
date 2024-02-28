import React, { useState } from "react";

/**
 * DropdownItem 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const DropdownItem = ({ name, itemList, isActive }) => {
    const [dropDownState, setDropDownState] = useState(false);
    const clickDropDown = () => {
        setDropDownState(!dropDownState);
    };
    return (
        <li>
            <button
                type="button"
                className="flex items-center w-full p-3 text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                id="dropdownBottomButton"
                onClick={clickDropDown}
            >
                <span className="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">
                    {name}
                </span>
                <svg
                    className={`w-3 h-3 ${dropDownState ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <ul
                id="dropdown-example"
                className={`transition-all duration-300 ease-in-out ${dropDownState ? 'max-h-40' : 'max-h-0'} overflow-hidden`}
                aria-labelledby="dropdownBottomButton"
            >
                {itemList.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item[1]}
                            className="flex items-center w-full p-3 text-gray-900 transition duration-75 pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            {item[0]}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default DropdownItem;
