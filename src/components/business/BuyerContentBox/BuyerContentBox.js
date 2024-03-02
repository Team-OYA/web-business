import InputText from "../../common/Input/InputText";
import ContentBox from "../../common/ContentBox/ContentBox";
import React, {useEffect, useState} from "react";
import PaymentApi from "../../../api/paymentApi";

/**
 * BuyerContentBox 컴포넌트 제작
 *
 * @since 2024.03.02
 * @author 김유빈
 */
function BuyerContentBox() {
    const [buyer, setBuyer] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PaymentApi.getBuyer()
                const data = response.data.data
                const buyer = {
                    id: data.id,
                    nickname: data.nickname,
                    email: data.email,
                    businessRegistrationNumber: data.businessRegistrationNumber,
                    connectedNumber: data.connectedNumber,
                }
                setBuyer(buyer)
            } catch (error) {
                console.error("주문자 데이터를 가져오는 중 오류 발생: ", error)
            }
        }
        fetchData()
    }, [])
    return (
        <ContentBox
            title="주문자 정보"
            content={
                <>
                    <InputText title="주문자" value={buyer.nickname} disabled="true"/>
                    <InputText title="연락처" value={buyer.connectedNumber} disabled="true"/>
                    <InputText title="이메일" value={buyer.email} disabled="true"/>
                    <InputText title="사업자 등록번호" value={buyer.businessRegistrationNumber} disabled="true"/>
                </>
            }/>
    )
}

export default BuyerContentBox;
