import TwoInput from "../common/Input/TwoInput";
import InputDate from "../common/Input/InputDate";
import InputText from "../common/Input/InputText";
import WithdrawPlan from "../../api/business/planDetail/withdrawPlan";

/**
 * PlanDetail 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const PlanDetail = ({planData}) => {

    if (!planData) {
        return <p>Loading...</p>;
    }

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

    /**
     * 입점 철회 api 연동
     *
     * @since 2024.03.10
     * @author 김유빈
     */
    const handleWithdraw = async () => {
        try {
            const response = await WithdrawPlan.withdraw(planData.planId);
            if (response.status === 200) {
                window.location.href = `/plans/${planData.planId}`
            }
        } catch (error) {
            console.error('Error approving plan:', error);
        }
    };

    return (
        <>
            <TwoInput
                firstInput={<InputDate title="오픈 일정" value={planData.openDate} />}
                secondInput={<InputText title="진행단계" value={planData.entranceStatus} />}
            />
            <TwoInput
                firstInput={<InputText title="오픈 지점" value={`${planData.office} ${planData.floor}`} />}
                secondInput={<InputText title="카테고리" value={planData.category} />}
            />
            <TwoInput
                firstInput={<InputText title="연락처" value={planData.contactInformation} />}
                secondInput={<InputText title="작성일" value={planData.createdDate} />}
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    {
                        planData.entranceStatus === '입점 요청' && (
                            <button
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: 'LightSkyBlue',
                                    color: 'white',
                                    borderRadius: '5px',
                                    margin: '0 5px',
                                    cursor: 'pointer',
                                }}
                                onClick={handleWithdraw}
                                disabled={false}>
                                입점 철회
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default PlanDetail;