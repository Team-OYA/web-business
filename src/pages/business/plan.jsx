import ContentBox from "../../components/common/ContentBox/ContentBox";
import TwoInput from "../../components/common/Input/TwoInput";
import InputText from "../../components/common/Input/InputText";
import MarkDownEditor from "../../components/common/Input/MarkDownEditor";
import PlanDetail from "../../components/Plan/PlanDetail";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import PopupApi from "../../api/popupApi";
import Button from "../../components/common/Button/Button";
import {Editor} from "@toast-ui/react-editor";
// import ReactMarkdown from 'react-markdown';

/**
 * Plan 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const Plan = () => {

    const { planId } = useParams();
    const [planDetailStatus, setPlanDetailStatus] = useState('');
    const [popupTitle, setPopupTitle] = useState("");

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
     * @author 이상민
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PopupApi.findByPlanId(planId); // Provide planId here
                setPopupData(response.data.data);
            } catch (error) {
                console.error('Error fetching popup data:', error);
            }
        };
        fetchData();
    }, [planId]); // Make sure to include planId as a dependency

    /**
     * 팝업 게시글 작성하기
     *
     * @since 2024.03.01
     * @author 이상민
     */
    const popupWrite = async () => {
        try {
            const popupDataToSave = {
                planId: planId,
                title: popupTitle,
                description: markdownContent,
            };

            console.log(popupDataToSave)

            const result = await PopupApi.savePopup(popupDataToSave);
            if (result.data.message) {
                alert(result.data.message);
            }
            const response = await PopupApi.findByPlanId(planId);
            setPopupData(response.data.data);
        } catch (error) {
            console.error("로그인 오류:", error);
        }
    };

    const [markdownContent, setMarkdownContent] = useState(
        popupData.description || ""
    );

    const onEditorChange = (value) => {
        setMarkdownContent(value);
        console.log('Editor content changed:', value);
    };

    return (
        <div className="plan">
            <ContentBox title="사업계획서 정보"
                        content={<PlanDetail planId={planId} onChangeStatus={setPlanDetailStatus}/>}/>
            <ContentBox title="팝업스토어 게시글 정보"
                        content={
                            <>
                                <PopupDetail
                                    popupData={popupData}
                                    onEditorChange={onEditorChange}
                                    onTitleChange={setPopupTitle}
                                />
                                {popupData.popupWritten === false && (
                                    <Button onClick={popupWrite} text="팝업게시글 작성하기"/>
                                )}
                            </>
                        }/>
            <ContentBox title="팝업스토어 게시글 부가 정보" content={<PopupExtraDetail popupData={popupData}/>}/>
        </div>
    );
};

const PopupDetail = ({ popupData, onEditorChange, onTitleChange}) => {
    /**
     * 마크다운 형식 저장
     *
     * @since 2024.03.01
     * @author 이상민
     */
    return (
        <>
            <InputText
                title="제목"
                value={popupData.title}
                onChange={(e) => onTitleChange(e.target.value)} // Update the title state on change
            />
            <div className="container">
                <div className="mb-6">
                    <label
                        htmlFor="markdown"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        게시글 작성하기
                    </label>
                    <Editor
                        id="markdown"
                        placeholder="내용을 입력해주세요."
                        initialValue={popupData.description || ""}  // 초기 값 설정
                        initialEditType="markdown"
                        previewStyle={window.innerWidth > 1200 ? "vertical" : "tab"}
                        hideModeSwitch
                        usageStatistics={false}
                        useCommandShortcut
                        height="auto"
                        onChange={onEditorChange}
                    />
                </div>
            </div>
        </>
    );
};

const PopupExtraDetail = ({popupData}) => {
    return (
        <>
            <InputText title="작성일" value={popupData.createdDate}/>
            <TwoInput
                firstInput={<InputText title="광고 금액" value={popupData.amount || '신청 전'}/>}
                secondInput={<InputText title="조회수" value={popupData.popupView}/>}
            />
        </>
    );
};

export default Plan;
