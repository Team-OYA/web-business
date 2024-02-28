import ContentBox from "../../components/common/ContentBox/ContentBox";
import FileUpload from "../../components/common/Input/FileUpload";
import InputDate from "../../components/common/Input/InputDate";
import TwoInput from "../../components/common/Input/TwoInput";
import InputText from "../../components/common/Input/InputText";
import DepartmentDropdown from "../../components/business/DepartmentDropdown/DepartmentDropdown";
import FloorDropdown from "../../components/business/FloorDropdown/FloorDropdown";
import Button from "../../components/common/Button/Button";
import PlanApi from "../../api/planApi";
import {useRef, useState} from "react";

/**
 * CreatePlan 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const CreatePlan = () => {
    const [phoneNumber, setPhoneNumber] = useState('1')
    const phoneNumberRef = useRef('2')
    const handleButtonClick = async () => {
        try {
            if (phoneNumberRef !== null) {
                console.log(phoneNumberRef.current)
                setPhoneNumber(phoneNumberRef.current)
                console.log(phoneNumber)
            } else {
                console.log("노노")
            }
            // todo: input 에서 항목을 가져와 수정
            // todo: file 추가 (없으면 에러남)
            const data = {
                "office": "B00140000", // 더현대 서울
                "floor": "DF000002", // 1층
                "openDate": "20240116",
                "closeDate": "20240130",
                "contactInformation": "010-1234-5678",
                "category": "CG000003" // 문구
            }
            const response = await PlanApi.save(data);
            console.log("Save response:", response.data);
        } catch (error) {
            console.error("저장 중 에러 발생: ", error);
        }
    };
    return (
        <div className="createPlan">
            <ContentBox
                title="팝업스토어 위치 선정"
                content={
                <div className="flex">
                    <DepartmentDropdown/>
                    <FloorDropdown/>
                </div>
            }/>
            <ContentBox title="사업계획서 작성" content={<PlanContentBox phoneNumberRef={phoneNumberRef}/>}/>
            <div className="w-80 m-auto mt-14">
                <Button text="제안하기" onClick={handleButtonClick}/>
            </div>
        </div>
    )
}

const PlanContentBox = ({phoneNumberRef}) => {
    return (
        <div>
            <TwoInput
                firstInput={<InputDate title="오픈 일정"/>}
                secondInput={<InputText ref={phoneNumberRef} title="연락처"/>}/>
            <FileUpload title="사업계획서" />
        </div>
    )
}

export default CreatePlan;
