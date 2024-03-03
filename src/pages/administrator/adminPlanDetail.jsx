import ContentBox from "../../components/common/ContentBox/ContentBox";
import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import AdminPlanApi from "../../api/administrator/planDetail/adminPlanApi";
import AdminPlanDetail from "../../components/Plan/AdminPlanDetail";

/**
 * PlanDetail 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const AdminPlainDetail = () => {

    const [planDetailStatus, setPlanDetailStatus] = useState('');

    const { planId } = useParams();
    const longPlanId = parseInt(planId, 10); // 10진수로 파싱
    const navigate = useNavigate(); // useNavigate를 import

    const [showAlert, setShowAlert] = useState(true);
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleWait = async () => {
        console.log(longPlanId);
        try {
            alert("정말 입정 대기 시키실 건가요?")
            await AdminPlanApi.postWait(longPlanId);
            alert("입정 대기 완료되었습니다.")
            navigate("/admin/plan"); // 페이지 이동
        } catch (error) {
            console.error('Error approving plan:', error);
        }
    };

    const handleApproval = async () => {
        try {
            alert("정말 입정 승인 시키실 건가요?")
            const response = await AdminPlanApi.postApprove(longPlanId);
            alert('입점이 승인되었습니다.');
            navigate('/admin/plan'); // 페이지 이동
        } catch (error) {
            console.error('Error approving plan:', error);
        }
    };

    const handleRejection = async () => {
        try {
            alert("정말 입정 거절 시키실 건가요?")
            const response = await AdminPlanApi.postDeny(longPlanId);
            alert('입점이 거절되었습니다.');
            navigate('/admin/plan'); // 페이지 이동
        } catch (error) {
            console.error('Error rejecting plan:', error);
        }
    };

    console.log(planDetailStatus)

    return(
        <div className="adminPlainDetail">
            <ContentBox
                title="사업계획서 정보"
                content={
                    <>
                        <AdminPlanDetail planId={planId} onChangeStatus={setPlanDetailStatus} />

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', marginTop: '20px' }}>
                                {planDetailStatus === '입점 요청' ? (
                                    <button
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: 'LightSkyBlue',
                                            color: 'white',
                                            borderRadius: '5px',
                                            margin: '0 5px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleWait}
                                        disabled={false} // The button is always enabled when visible
                                    >
                                        입점 대기
                                    </button>
                                ) : null}

                                {planDetailStatus === '입점 대기' ? (
                                    <button
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: 'MediumSeaGreen',
                                            color: 'white',
                                            borderRadius: '5px',
                                            margin: '0 5px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleApproval}
                                        disabled={false} // The button is always enabled when visible
                                    >
                                        입점 승인
                                    </button>
                                ) : null}
                                {planDetailStatus === '입점 요청' || planDetailStatus === '입점 대기' ? (
                                    <button
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: 'LightCoral',
                                            color: 'white',
                                            borderRadius: '5px',
                                            margin: '0 5px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleRejection}
                                        disabled={false}  // The button is always enabled when visible
                                    >
                                        입점 거절
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    </>
                }/>
        </div>
    );
};

export default AdminPlainDetail;
