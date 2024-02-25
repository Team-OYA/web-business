/**
 * FileUpload 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function FileUpload(props) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="formFile"
                       className="block mb-2 text-sm font-medium text-gray-900">
                    {props.title}
                </label>
                <input type="file" id="formFile"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                       focus:border-blue-500 block w-full px-3 py-[0.32rem] font-normal file:-mx-3 file:-my-[0.32rem]
                       file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit
                       file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition
                       file:duration-150 file:ease-in-out file:[border-inline-end-width:1px]
                       file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200"
                       placeholder={props.placeholder}/>
            </div>
        </>
    )
}

export default FileUpload;
