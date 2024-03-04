
/**
 * PaymentButton 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function PaymentButton({text, url, onClick, buttonClassName, imgClassName}) {
    return (
        <div>
            <button type="button"
                    className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4
                    focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700
                    dark:text-white dark:hover:bg-gray-700 me-2 mb-2 h-12 w-28 ${buttonClassName}`}
                    onClick={onClick}>
                {
                    url &&
                    <div className="flex items-center justify-center">
                        <img
                            src={url}
                            alt="toss"
                            className={`max-w-full max-h-full ${imgClassName}`}/>
                    </div>
                }
                {text}
            </button>
        </div>
    )
}

export default PaymentButton;
