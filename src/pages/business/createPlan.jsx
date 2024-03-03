import ContentBox from "../../components/common/ContentBox/ContentBox";
import FileUpload from "../../components/common/Input/FileUpload";
import InputDate from "../../components/common/Input/InputDate";
import TwoInput from "../../components/common/Input/TwoInput";
import InputText from "../../components/common/Input/InputText";
import DepartmentDropdown from "../../components/business/DepartmentDropdown/DepartmentDropdown";
import FloorDropdown from "../../components/business/FloorDropdown/FloorDropdown";
import Button from "../../components/common/Button/Button";
import PlanApi from "../../api/business/createPlan/planApi";
import {useRef, useState} from "react";

/**
 * CreatePlan 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const CreatePlan = () => {
    const [office, setOffice] = useState(null)
    const [category, setCategory] = useState(null)
    const [floor, setFloor] = useState(null)
    const [openDate, setOpenDate] = useState(null)
    const [closeDate, setCloseDate] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [file, setFile] = useState(null)

    const handleOpenDateChange = (event) => {
        setOpenDate(event.target.value.split('-').join(''))
    }
    const handleCloseDateChange = (event) => {
        setCloseDate(event.target.value.split('-').join(''))
    }
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleButtonClick = async () => {
        try {
            const data = {
                "office": office,
                "floor": floor,
                "openDate": openDate,
                "closeDate": closeDate,
                "contactInformation": phoneNumber,
                "category": category
            }
            const response = await PlanApi.save(data, file);
        } catch (error) {
            console.error("저장 중 에러 발생: ", error);
        }
    }

    return (
        <div className="createPlan">
            <ContentBox
                title="팝업스토어 위치 선정"
                content={
                <div className="flex">
                    <DepartmentDropdown setOffice={setOffice}/>
                    <FloorDropdown setCategory={setCategory} setFloor={setFloor}/>
                </div>
            }/>
            <ContentBox
                title="사업계획서 작성"
                content={
                <PlanContentBox
                    onOpenDateChange={handleOpenDateChange}
                    onCloseDateChange={handleCloseDateChange}
                    onPhoneNumberChange={handlePhoneNumberChange}
                    onFileChange={handleFileChange}/>}/>
            <div className="w-80 m-auto mt-14">
                <Button text="제안하기" onClick={handleButtonClick}/>
            </div>
        </div>
    )
}

const PlanContentBox = ({onOpenDateChange, onCloseDateChange, onPhoneNumberChange, onFileChange}) => {
    return (
        <div>
            <TwoInput
                firstInput={<InputDate title="오픈일" onChange={onOpenDateChange}/>}
                secondInput={<InputDate title="마감일" onChange={onCloseDateChange}/>}/>
            <InputText title="연락처" onChange={onPhoneNumberChange}/>
            <FileUpload title="사업계획서" onChange={onFileChange}/>
        </div>
    )
}

export default CreatePlan;
