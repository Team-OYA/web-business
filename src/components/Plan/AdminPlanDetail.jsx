import {useEffect, useState} from "react";
import PlanApi from "../../api/planApi";
import TwoInput from "../common/Input/TwoInput";
import InputDate from "../common/Input/InputDate";
import InputText from "../common/Input/InputText";
import FileUpload from "../common/Input/FileUpload";
import Button from "../common/Button/Button";
import AdminPlanApi from "../../api/administrator/adminPlanApi";

/**
 * PlanDetail 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const AdminPlanDetail = ( {planId, onChangeStatus}) => {
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
                const response = await AdminPlanApi.getPlan(planId);
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

    /**
     * 파일 다운로드
     *
     * @since 2024.02.29
     * @author 이상민
     */
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${planData.businessPlanUrl}`;
        link.download = `${planData.businessPlanUrl}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <TwoInput
                firstInput={<InputDate title="오픈 일정" placeholder={planData ? planData.openDate : ''} />}
                secondInput={<InputText title="진행단계" value={planData ? planData.entranceStatus : ''} />}
            />
            <TwoInput
                firstInput={<InputText title="오픈 지점" value={`${planData ? planData.office : ''} ${planData ? planData.floor : ''}`} />}
                secondInput={<InputText title="카테고리" value={planData ? planData.category : ''} />}
            />
            <TwoInput
                firstInput={<InputText title="연락처" value={planData ? planData.contactInformation : ''} />}
                secondInput={<InputText title="작성일" value={planData ? planData.createdDate : ''} />}
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

export default AdminPlanDetail;