
/**
 * InputText 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function InputText(props) {
    return (
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {props.title}
            </label>
            <input type={props.type} ref={props.ref}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5"
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.onChange}
                   disabled={props.disabled}>
            </input>
        </div>
    )
}

export default InputText;
