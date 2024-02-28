import ContentBox from "../../components/common/ContentBox/ContentBox";
import TwoInput from "../../components/common/Input/TwoInput";
import InputDate from "../../components/common/Input/InputDate";
import InputText from "../../components/common/Input/InputText";
import FileUpload from "../../components/common/Input/FileUpload";
import MarkDownEditor from "../../components/common/Input/MarkDownEditor";
import {useEffect, useRef, useState} from "react";
import PlanApi from "../../api/planApi";
import PlanDetail from "../../components/Plan/PlanDetail";
import {useParams} from "react-router-dom";

/**
 * PlanDetail 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const AdminPlainDetail = () => {

    const { planId } = useParams();

    const handleApproval = async () => {
        try {
            // const response = await PlanApi.approvePlan(planId);
            // console.log('Plan approved:', response.data);
        } catch (error) {
            // Handle error (show an error message)
            console.error('Error approving plan:', error);
        }
    };

    const handleRejection = async () => {
        try {
            // const response = await PlanApi.rejectPlan(planId);
            // console.log('Plan rejected:', response.data);
        } catch (error) {
            // Handle error (show an error message)
            console.error('Error rejecting plan:', error);
        }
    };

    return(
        <div className="adminPlainDetail">
            <ContentBox
                title="사업계획서 정보"
                content={
                    <>
                        <PlanDetail planId={planId}/>
                        <div style={{textAlign: 'center', marginTop: '20px'}}>
                            <button
                                style={{
                                    marginRight: '10px',
                                    padding: '10px 20px',
                                    backgroundColor: 'green',
                                    color: 'white',
                                    borderRadius: '5px',
                                }}
                                onClick={handleApproval}
                            >
                                입점 승인
                            </button>
                            <button
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    borderRadius: '5px',
                                }}
                                onClick={handleRejection}
                            >
                                입점 거절
                            </button>
                        </div>
                    </>
                }/>
        </div>
    );
};

export default AdminPlainDetail;
