import {useState} from "react";

/**
 * Dropdown 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function Dropdown({buttonId, dropdownId, title, categories, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const handleItemSelect = (code) => {
        onSelect(code)
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button id={buttonId}
                    onClick={toggleDropdown}
                    data-dropdown-toggle={dropdownId}
                    data-dropdown-trigger="hover"
                    className="text-white bg-main-color-600 hover:bg-main-color-800 focus:ring-4 focus:outline-none
                    focus:ring-main-color-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex
                    items-center mb-6 mr-4"
                    type="button">
                {title}
                <svg className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {isOpen && (
                <div id={dropdownId}
                     className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-1">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby={buttonId}>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => handleItemSelect(category.code)}>{category.description}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Dropdown;
