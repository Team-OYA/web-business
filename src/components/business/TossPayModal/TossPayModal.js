import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import Button from "../../common/Button/Button";
import PaymentApi from "../../../api/paymentApi";

const selector = "#payment-widget"
const customerKey = nanoid()

/**
 * @since 2024.02.29
 * @author 김유빈
 */
export function TossPayModal() {
    const { data: paymentWidget } = usePaymentWidget(clientKey, customerKey)
    const paymentMethodsWidgetRef = useRef(null)
    const [price, setPrice] = useState(50_000)

    useEffect(() => {
        if (paymentWidget == null) {
            return
        }
        const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
            selector,
            { value: price },
            { variantKey: "DEFAULT" }
        )
        paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" })
        paymentMethodsWidgetRef.current = paymentMethodsWidget
    }, [paymentWidget])

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current
        if (paymentMethodsWidget == null) {
            return
        }
        paymentMethodsWidget.updateAmount(price)
    }, [price])

    const confirmTossPay = async (orderId) => {
        await PaymentApi.confirmTossPay(orderId, 175, "popup", price)
    }

    // todo: 메인광고 이미지 추가
    return (
        <div className="wrapper">
            <div className="box_section">
                <div id="payment-widget"/>
                <div id="agreement"/>
                <div className="result wrapper">
                    <Button text="결제하기"
                            className="w-64"
                            onClick={async () => {
                                try {
                                    const orderId = nanoid()
                                    await confirmTossPay(orderId)
                                    try {
                                        await paymentWidget?.requestPayment({
                                            orderId: orderId,
                                            orderName: "토스 티셔츠 외 2건",
                                            customerName: "김토스",
                                            customerEmail: "customer123@gmail.com",
                                            customerMobilePhone: "01012341234",
                                            successUrl: `http://localhost:8084/api/v1/payments/toss/success`,
                                            failUrl: `http://localhost:8084/api/v1/payments/toss/fail`
                                        })
                                    } catch (error) {
                                        // todo: 에러 모달창 추가 (예. 필수 항목 동의 체크)
                                        // 에러 처리하기
                                        console.error(error)
                                    }
                                } catch (error) {
                                    console.error(error)
                                }
                            }}/>
                </div>
            </div>
        </div>
    )
}

function usePaymentWidget(clientKey, customerKey) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // ------  결제위젯 초기화 ------
                // @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
                const result = await loadPaymentWidget(clientKey, customerKey);
                setData(result);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchData();

        // Cleanup function
        return () => {
            // Perform any cleanup if needed
        };
    }, [clientKey, customerKey]);

    return { data, isLoading, error };
}
