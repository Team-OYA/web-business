import ContentBox from "../../components/common/ContentBox/ContentBox";
import FileUpload from "../../components/common/Input/FileUpload";
import InputDate from "../../components/common/Input/InputDate";
import TwoInput from "../../components/common/Input/TwoInput";
import InputText from "../../components/common/Input/InputText";

/**
 * CreatePlan 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const CreatePlan = () =>  {
    return (
        <div className="createPlan">
            <ContentBox title="팝업스토어 위치 선정"/>
            <ContentBox title="사업계획서 작성" content={<PlanContentBox />}/>
        </div>
    )
}

const PlanContentBox = () => {
    return (
        <div>
            <TwoInput
                firstInput={<InputDate title="오픈 일정"/>}
                secondInput={<InputText title="연락처"/>}/>
            <FileUpload title="사업계획서" />
        </div>
    )
}

export default CreatePlan;
