import ContentBox from "../../components/common/ContentBox/ContentBox";
import TwoInput from "../../components/common/Input/TwoInput";
import InputDate from "../../components/common/Input/InputDate";
import InputText from "../../components/common/Input/InputText";
import FileUpload from "../../components/common/Input/FileUpload";
import MarkDownEditor from "../../components/common/Input/MarkDownEditor";

/**
 * Plan 페이지 제작
 *
 * @since 2024.02.25
 * @author 김유빈
 */
const Plan = () => {
    return (
        <div className="plan">
            <ContentBox title="사업계획서 정보" content={<PlanDetail />}/>
            <ContentBox title="팝업스토어 게시글 정보" content={<PopupDetail />}/>
            <ContentBox title="팝업스토어 게시글 부가 정보" content={<PopupExtraDetail />}/>
        </div>
    )
}

const PlanDetail = () => {
    return (
        <>
            <TwoInput
                firstInput={<InputDate title="오픈 일정"/>}
                secondInput={<InputText title="진행단계" value="제안 요청"/>}/>
            <TwoInput
                firstInput={<InputText title="오픈 지점" value="더현대 서울 1층"/>}
                secondInput={<InputText title="카테고리" value="문구"/>}/>
            <TwoInput
                firstInput={<InputText title="연락처" value="010-1234-5678"/>}
                secondInput={<InputText title="작성일" value="2024.02.01"/>}/>
            <FileUpload title="사업계획서" />
        </>
    )
}

const PopupDetail = () => {
    return (
        <>
            <InputText title="제목" value="‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 슬램덩크 팝업 스토어" />
            <MarkDownEditor title="내용"/>
        </>
    )
}

const PopupExtraDetail = () => {
    return (
        <>
            <InputText title="작성일" value="2024.02.01 17:30:00" />
            <TwoInput
                firstInput={<InputText title="수정 상태" value="신청 전"/>}
                secondInput={<InputText title="철회 상태" value="신청 전"/>}/>
            <TwoInput
                firstInput={<InputText title="광고 금액" value="1,000,000"/>}
                secondInput={<InputText title="조회수" value="3,720회"/>}/>
        </>
    )
}

export default Plan;
