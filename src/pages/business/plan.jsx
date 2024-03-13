import ContentBox from "../../components/common/ContentBox/ContentBox";
import TwoInput from "../../components/common/Input/TwoInput";
import InputText from "../../components/common/Input/InputText";
import PlanDetail from "../../components/Plan/PlanDetail";
import {useParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import PopupApi from "../../api/popupApi";
import Button from "../../components/common/Button/Button";

import {Editor, Viewer} from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import './planViewer.css';
import FloatingButton from "../../components/business/FloatingButton/FloatingButton";
import MyPlanDetailApi from "../../api/business/planDetail/myPlanDetailApi";

/**
 * Plan 페이지 제작
 * @since 2024.02.25
 * @author 김유빈
 */
const Plan = () => {

    const { planId } = useParams();

    const [planData, setPlanData] = useState(null);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupDescription, setPopupDescription] = useState("");

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
     * PlanDetail 컴포넌트 Plan으로 분리 및 API 연결
     *
     * @since 2024.02.29
     * @author 이상민
     */
    useEffect(() => {
        const fetchPlanData = async () => {
            try {
                const response = await MyPlanDetailApi.getPlan(planId);
                const data = response.data.data;
                const plan = {
                    planId: data.planId,
                    openDate: data.openDate.replaceAll(".", "-"),
                    entranceStatus: data.entranceStatus ? data.entranceStatus : '',
                    category: data.category ? data.category : '',
                    office: data.office ? data.office : '',
                    floor: data.floor ? data.floor : '',
                    contactInformation: data.contactInformation ? data.contactInformation : '',
                    createdDate: data.createdDate ? data.createdDate : '',
                    businessPlanUrl: data.businessPlanUrl,
                }
                console.log(plan)
                setPlanData(plan);
            } catch (error) {
                console.error('Error fetching plan data:', error);
            }
        };
        fetchPlanData();
    }, [planId]);

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
                console.log(popupData)
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
                description: popupDescription,
            };
            const result = await PopupApi.savePopup(popupDataToSave);
            if (result.status === 200) {
                window.location.href = `/plans/${planId}`
            }
            const response = await PopupApi.findByPlanId(planId);
            setPopupData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="plan">
            <ContentBox title="사업계획서 정보"
                        content={<PlanDetail planData={planData}/>}/>
            {
                planData && planData.entranceStatus === '입점 승인' && (
                    <>
                        <ContentBox title="팝업스토어 게시글 정보"
                                    content={
                                        <>
                                            <PopupDetail
                                                popupData={popupData}
                                                onTitleChange={setPopupTitle}
                                                onDescriptionChange={setPopupDescription}
                                            />
                                            {popupData.popupWritten === false && (
                                                <Button onClick={popupWrite} text="팝업게시글 작성하기"/>
                                            )}
                                        </>
                                    }
                        />
                        <ContentBox title="팝업스토어 게시글 부가 정보" content={<PopupExtraDetail popupData={popupData}/>}/>
                    </>
                )
            }
            <FloatingButton />
        </div>
    );
};

const PopupDetail = ({ popupData, onTitleChange, onDescriptionChange }) => {
    const editorRef = useRef();
    /**
     * html 형식 저장
     *
     * @since 2024.03.01
     * @author 이상민
     */
    useEffect(() => {
        const initialDescription = popupData.description || "";
        onDescriptionChange(initialDescription);
        const editorInstance = editorRef.current?.getInstance();
        if (editorInstance) {
            editorInstance.setHTML(initialDescription);
        }
    }, [popupData.description, onDescriptionChange]);

    /**
     * 팝업 게시글 내용 저장
     *
     * @since 2024.03.02
     * @author 이상민
     */
    const onChange = () => {
        const editorInstance = editorRef.current?.getInstance();
        if (editorInstance) {
            const data = editorInstance.getHTML();
            onDescriptionChange(data);
        }
    };

    /**
     * 팝업 게시글 이미지 저장
     *
     * @since 2024.03.02
     * @author 이상민
     */
    const onUploadImage = async (blob, callback) => {
        const url = await PopupApi.saveImage(blob);
        callback(url, 'alt text');
        return false;
    };

    return (
        <>
            <InputText
                title="제목"
                value={popupData.title}
                onChange={(e) => onTitleChange(e.target.value)}
            />
            <div className="container">
                <div className="mb-6">

                    {popupData.popupWritten === false ? (
                        <>
                            <label
                                htmlFor="markdown"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                게시글 작성하기
                            </label>
                            <Editor
                                previewStyle="vertical"
                                height="600px"
                                initialEditType="wysiwyg"
                                useCommandShortcut={false}
                                language="ko-KR"
                                ref={editorRef}
                                onChange={onChange}
                                plugins={[colorSyntax]}
                                hooks={{
                                    addImageBlobHook: onUploadImage
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <label
                                htmlFor="markdown"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                게시글
                            </label>
                            <div className="viewer-container">
                                <Viewer initialValue={popupData.description || ""}/>
                            </div>
                        </>
                    )}
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
                firstInput={<InputText title="광고 금액" value={popupData.amount || 0}/>}

                secondInput={<InputText title="조회수" value={popupData.popupView}/>}
            />
        </>
    );
};

export default Plan;
