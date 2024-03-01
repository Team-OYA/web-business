import ContentBox from "../../components/common/ContentBox/ContentBox";
import TwoInput from "../../components/common/Input/TwoInput";
import InputText from "../../components/common/Input/InputText";
import MarkDownEditor from "../../components/common/Input/MarkDownEditor";
import PlanDetail from "../../components/Plan/PlanDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PopupApi from "../../api/popupApi";
import Button from "../../components/common/Button/Button";

/**
 * Plan 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const Plan = () => {

    const { planId } = useParams();
    const [planDetailStatus, setPlanDetailStatus] = useState('');

    const [popupData, setPopupData] = useState({
        popupWritten: false,
        popupId: 0,
        title: null,
        description: null,
        popupImages: null,
        createdDate: null,
        modifiedDate: null,
        withdrawalStatus: null,
        account: 0,
        popupView: 0
    });

    /**
     * 사업계획서에 따른 팝업 게시글 정보 보기 api 연결
     *
     * @since 2024.03.01
     * @author 김유빈
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PopupApi.findByPlanId();
                setPopupData(response.data.data);
            }catch (error) {
                console.error('Error fetching popup data:', error);
            }
        };
        fetchData();
    },[]);

    return (
        <div className="plan">
            <ContentBox title="사업계획서 정보"
                        content={<PlanDetail planId={planId} onChangeStatus={setPlanDetailStatus}/>}/>
            <ContentBox title="팝업스토어 게시글 정보"
                        content={
                <>
                    <PopupDetail popupData={popupData}/>
                    {popupData.popupWritten === false && (
                        <Button text="팝업게시글 작성하기"/>
                    )}
                </>

            }/>
            <ContentBox title="팝업스토어 게시글 부가 정보" content={<PopupExtraDetail popupData={popupData} />}/>
        </div>
    )
}

const PopupDetail = (popupData) => {
    return (
        <>
            <InputText title="제목" value={popupData.title} />
            <MarkDownEditor title={popupData.title}/>
        </>
    )
}

const PopupExtraDetail = (popupData) => {
    return (
        <>
            <InputText title="작성일" value={popupData.createdDate} />
            <TwoInput
                firstInput={<InputText title="수정 상태" value={popupData.modifiedDate || "신청 전"}/>}
                secondInput={<InputText title="철회 상태" value={popupData.withdrawalStatus || "신청 전"}/>}/>
            <TwoInput
                firstInput={<InputText title="광고 금액" value={popupData.amount}/>}
                secondInput={<InputText title="조회수" value={popupData.popupView}/>}/>
        </>
    )
}

export default Plan;
