import {useEffect, useState} from "react";
import PlanApi from "../../api/planApi";
import TwoInput from "../common/Input/TwoInput";
import InputDate from "../common/Input/InputDate";
import InputText from "../common/Input/InputText";
import FileUpload from "../common/Input/FileUpload";
import Button from "../common/Button/Button";

/**
 * PlanDetail 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const PlanDetail = ( {planId}) => {
    /**
     * PlanDetail 컴포넌트 Plan으로 분리 및 API 연결
     *
     * @since 2024.02.29
     * @author 이상민
     */
    const [planData, setPlanData] = useState(null);
    useEffect(() => {
        const fetchPlanData = async () => {
            try {
                const response = await PlanApi.getPlan(planId);
                console.log(response);
                setPlanData(response.data.data);
            } catch (error) {
                console.error('Error fetching plan data:', error);
            }
        };
        fetchPlanData();
    }, [planId]);

    if (!planData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <TwoInput
                firstInput={<InputDate title="오픈 일정" placeholder={planData.openDate} />}
                secondInput={<InputText title="진행단계" value={planData.entranceStatus} />}
            />
            <TwoInput
                firstInput={<InputText title="오픈 지점" value={`${planData.office} ${planData.floor}`} />}
                secondInput={<InputText title="카테고리" value={planData.category} />}
            />
            <TwoInput
                firstInput={<InputText title="연락처" value={planData.contactInformation} />}
                secondInput={<InputText title="작성일" value={planData.createdDate}/>}
            />
            <FileUpload title="사업계획서"/>
        </>
    )
}

export default PlanDetail;