import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';

/**
 * InputDate 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function InputDate(props) {
    // todo: 달력 동작 안함
    return (
        <div className="relative mb-6">
            <div className="absolute inset-y-12 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2
                        2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0
                        2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <label htmlFor="default-input"
                   className="block mb-2 text-sm font-medium text-gray-900">
                {props.title}
            </label>
            <input datepicker type="text" id="default-input"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                   focus:border-blue-500 block w-full ps-10 p-2.5"
                   placeholder={props.placeholder}/>
        </div>
    )
}

export default InputDate;