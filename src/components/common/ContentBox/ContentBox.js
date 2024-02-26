export default ContentBox;

/**
 * ContentBox 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function ContentBox(props) {
    return (
        <div className="shadow-md bg-white w-11/12 mx-auto my-6 rounded-none text-black-text-color-950">
            <h1 className="p-4 text-lg font-bold">{props.title}</h1>
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <div className="p-4">
                {props.content}
            </div>
        </div>
    )
}
