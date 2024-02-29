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
const PlanDetail = ( {planId, onChangeStatus}) => {
    /**
     * PlanDetail 컴포넌트 Plan으로 분리 및 API 연결
     *
     * @since 2024.02.29
     * @author 이상민
     */
    const [planData, setPlanData] = useState(null);
    const [planDetailStatus, setPlanDetailStatus] = useState('');
    useEffect(() => {
        const fetchPlanData = async () => {
            try {
                const response = await PlanApi.getPlan(planId);
                console.log(response);
                setPlanData(response.data.data);

                setPlanDetailStatus(response.data.data.entranceStatus);
            } catch (error) {
                console.error('Error fetching plan data:', error);
            }
        };
        fetchPlanData();
    }, [planId]);

    if (!planData) {
        return <p>Loading...</p>;
    }

    onChangeStatus(planDetailStatus);

    const handleDownload = () => {
        // 파일 이름을 기반으로 파일을 다운로드할 URL을 가정합니다.
        // `/api/download`를 실제 백엔드 API 엔드포인트로 교체하십시오.

        // 링크 요소를 생성합니다.
        const link = document.createElement('a');
        link.href = `${planData.businessPlanUrl}`;
        link.download = `${planData.businessPlanUrl}`;

        // 링크를 본문에 추가합니다.
        document.body.appendChild(link);

        // 링크를 클릭하여 다운로드를 시작합니다.
        link.click();

        // 링크를 본문에서 제거합니다.
        document.body.removeChild(link);
    };

    return (
        <>
            <TwoInput
                firstInput={<InputDate title="오픈 일정" placeholder={planData.openDate}/>}
                secondInput={<InputText title="진행단계" value={planData.entranceStatus}/>}
            />
            <TwoInput
                firstInput={<InputText title="오픈 지점" value={`${planData.office} ${planData.floor}`}/>}
                secondInput={<InputText title="카테고리" value={planData.category}/>}
            />
            <TwoInput
                firstInput={<InputText title="연락처" value={planData.contactInformation}/>}
                secondInput={<InputText title="작성일" value={planData.createdDate}/>}
            />

            <div className="flex-auto mr-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    사업계획서
                </label>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    onClick={handleDownload}
                >
                    파일 다운로드
                </button>
            </div>

        </>
    )
}

export default PlanDetail;