import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';

/**
 * InputDate 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function InputDate({title, placeholder, value, onChange}) {
    return (
        <div className="relative mb-6">
            <label htmlFor="default-input"
                   className="block mb-2 text-sm font-medium text-gray-900">
                {title}
            </label>
            <input type="date" id="default-input"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5"
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}/>
        </div>
    )
}

export default InputDate;
