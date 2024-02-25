
/**
 * OutlineCircleButton 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function OutlineCircleDisabledButton(props) {
    return (
        <button type="button"
                className="text-main-color-700 border border-main-color-700
                focus:ring-4 focus:outline-none focus:ring-main-color-300 font-medium text-sm px-5 py-2.5
                text-center me-2 mb-2 dark:border-main-color-500 dark:text-main-color-500
                dark:focus:ring-main-color-800 rounded-full" disabled>
            {props.text}
        </button>
    )
}

export default OutlineCircleDisabledButton;
