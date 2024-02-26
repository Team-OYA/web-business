import ContentBox from "../../components/common/ContentBox/ContentBox";
import InputText from "../../components/common/Input/InputText";
import Table from "../../components/common/Table/Table";
import RadioGroup from "../../components/common/Radio/RadioGroup";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import PaymentButton from "../../components/common/Button/PaymentButton";
import TossImage from "../../assets/icon/toss.png";

/**
 * Ad 페이지 제작
 *
 * @since 2024.02.26
 * @author 김유빈
 */
const Ad = () => {
    // todo: check table 컴포넌트 생성
    return (
        <>
            <ContentBox
                title="광고 금액 선정"
                content={
                    <>
                        <RadioGroup title="광고 분류" content={["팝업스토어 게시글", "커뮤니티 게시글"]}/>
                        <InputText title="광고 금액"/>
                    </>
                }/>
            <ContentBox
                title="게시글 선택"
                content={
                    <>
                        <Table sampleData={
                            [["‘더현대 서울’에서 만나는 가슴 뛰는 그 순간! ‘더 퍼스트 ...", "2024.02.01"]]
                        }/>
                    </>
                }/>
            <ContentBox
                title="주문자 정보"
                content={
                <>
                    <InputText title="주문자" value="김유빈" disabled="true"/>
                    <InputText title="연락처" value="010-1234-5678" disabled="true"/>
                    <InputText title="이메일" value="hansalchai789@gmail.com" disabled="true"/>
                    <InputText title="사업자 등록번호" value="109-81-72945" disabled="true"/>
                </>
                }/>
            <ContentBox
                title="결제 방법"
                content={
                    <>
                        <PaymentButton text="토스페이" url={TossImage}/>
                        <Checkbox text="주문 내용을 확인했으며, 아래 내용에 모두 동의합니다." />
                    </>
                }/>
            <ContentBox
                title="최종 결제금액"
                content={<InputText title="총 결제금액" value="1,000,000원" disabled="true"/>}/>
        </>
    )
}

export default Ad;