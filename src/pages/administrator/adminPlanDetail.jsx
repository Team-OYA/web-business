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
    return(
        <div className="adminPlainDetail">
            <ContentBox title="사업계획서 정보" content={<PlanDetail planId={planId} />}/>
        </div>
    );
};

export default AdminPlainDetail;
