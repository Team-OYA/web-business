
/**
 * RadioGroup 컴포넌트 생성
 *
 * @since 2024.02.26
 * @author 김유빈
 */
function RadioGroup(props) {
    return (
        <>
            <div className="mb-6">
                <label
                       className="block mb-2 text-sm font-medium text-gray-900">
                    {props.title}
                </label>
                <div className="flex">
                    {
                        props.content.map((text, index) => (
                            <div className="flex-auto items-center mb-4">
                                <input id={`default-radio-${index}`} type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-main-color-600 bg-gray-100 border-gray-300 focus:ring-main-color-500 focus:ring-2"/>
                                <label htmlFor={`default-radio-${index}`}
                                       className="ms-2 text-sm font-medium text-gray-700">
                                    {text}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RadioGroup;
