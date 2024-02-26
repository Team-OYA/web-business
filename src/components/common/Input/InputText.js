
/**
 * InputText 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function InputText(props) {
    return (
        <div className="mb-6">
            <label htmlFor="default-input"
                   className="block mb-2 text-sm font-medium text-gray-900">
                {props.title}
            </label>
            <input type="text" id="default-input"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5"
                   placeholder={props.placeholder}
                   value={props.value}
                   disabled={props.disabled}/>
        </div>
    )
}

export default InputText;
