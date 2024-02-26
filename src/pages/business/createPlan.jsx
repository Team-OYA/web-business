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
const CreatePlan = () => {
    const data1 = [
        ["더현대", "현대백화점", "현대아울렛"],
        ["더현대 서울", "더현대 대구"]
    ]
    const data2 = [
        ["식품", "화장품", "의류", "리빙", "문구", "K-POP"],
        ["1층", "3층"]
    ]
    return (
        <div className="createPlan">
            <ContentBox
                title="팝업스토어 위치 선정"
                content={
                <div className="flex">
                    <MultipleDropdown title="현대백화점 지점 선택" data={data1}/>
                    <MultipleDropdown title="팝업스토어 위치 선정" data={data2}/>
                </div>
            }/>
            <ContentBox title="사업계획서 작성" content={<PlanContentBox/>}/>
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

const MultipleDropdown = ({title, data}) => {
    // todo: title 이 data 위로 위치
    return (
        <>
            <label htmlFor="default-input"
                   className="block mb-2 text-sm font-medium text-gray-900">
                {title}
            </label>
            <div id="default-input" className="flex shadow mr-auto">
                {
                    data.map((column, index) => (
                        <div id="test"
                             className="z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 h-44 overflow-y-scroll">
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="test">
                                {
                                    column.map((category, index) => (
                                        <li key={index}>
                                            <button
                                                className="block px-4 py-2 hover:bg-gray-100 w-full text-left">{category}</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CreatePlan;
