
/**
 * TwoInput 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function TwoInput(props) {
    return (
        <div className="flex">
            <div className="flex-auto mr-5">
                {props.firstInput}
            </div>
            <div className="flex-auto">
                {props.secondInput}
            </div>
        </div>
    )
}

export default TwoInput;
