export default ContentBoxFull;

/**
 * ContentBoxFull 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */
function ContentBoxFull(props) {
    return (
        <div className="shadow-md h-full bg-white mx-auto rounded-none text-black-text-color-950">
            <h1 className="p-4 text-lg font-bold">{props.title}</h1>
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <div className="p-4">
                {props.content}
            </div>
        </div>
    )
}
