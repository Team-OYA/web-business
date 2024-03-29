
/**
 * Button 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function Button({text, className, onClick}) {
    return (
        <button type="button"
                className={`text-white bg-main-color-700 hover:bg-main-color-800 focus:ring-4
                    focus:ring-main-color-300 font-medium rounded-lg text-sm w-full p-4 me-2 mb-2 dark:bg-main-color-600
                    dark:hover:bg-main-color-700 focus:outline-none dark:focus:ring-main-color-800 ${className}`}
                onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
