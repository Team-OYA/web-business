
/**
 * SearchButton 컴포넌트 제작
 *
 * @since 2024.03.03
 * @author 김유빈
 */
function SearchButton({onClick}) {
    return (
        <>
            <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-black-50 bg-gray-200 rounded-lg border"
                onClick={onClick}>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </>
    )
}

export default SearchButton;
