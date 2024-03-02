import ContentBox from "../../components/common/ContentBox/ContentBox";
import InputText from "../../components/common/Input/InputText";
import RadioGroup from "../../components/common/Radio/RadioGroup";
import PaymentButton from "../../components/common/Button/PaymentButton";
import TossImage from "../../assets/icon/toss.png";
import CheckedPostTable from "../../components/common/Table/CheckedPostTable";
import React, {useState} from "react";
import Button from "../../components/common/Button/Button";
import TossPayModal from "../../components/business/TossPayModal/TossPayModal";
import BuyerContentBox from "../../components/business/BuyerContentBox/BuyerContentBox";

/**
 * Ad 페이지 제작
 *
 * @since 2024.02.26
 * @author 김유빈
 */
const Ad = () => {
    const [isOpen, setOpen] = useState(false);
    const handleClickTossPaymentButton = () => {
        setOpen(true);
    };
    return (
        <>
            <div className="flex">
                <div className="flex-auto">
                    <ContentBox
                        title="광고 금액 선정"
                        content={
                            <>
                                <RadioGroup title="광고 분류" content={["팝업스토어 게시글", "커뮤니티 게시글"]}/>
                                <InputText title="광고 금액" value="1,000,000원" disabled="true"/>
                            </>
                        }/>
                    <ContentBox
                        title="게시글 선택"
                        content={<CheckedPostTable/>}/>
                </div>
                <div className="flex-auto">
                    <BuyerContentBox/>
                    <ContentBox
                        title="결제 방법"
                        content={
                            <>
                                <PaymentButton text="토스페이" url={TossImage} onClick={handleClickTossPaymentButton}/>
                                { isOpen && (
                                    <TossPayModal/>
                                )}
                            </>
                        }/>
                    <ContentBox
                        title="최종 결제금액"
                        content={
                            <>
                                <InputText title="총 결제금액" value="1,000,000원" disabled="true"/>
                                <Button text="결제하기"/>
                            </>
                        }/>
                </div>
            </div>
        </>
    )
}

export default Ad;
