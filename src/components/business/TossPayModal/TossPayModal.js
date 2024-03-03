import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import Button from "../../common/Button/Button";
import PaymentApi from "../../../api/paymentApi";

const customerKey = nanoid()

/**
 * @since 2024.02.29
 * @author 김유빈
 */
function TossPayModal({postType, price, file}) {
    const { data: paymentWidget } = usePaymentWidget(process.env.REACT_APP_TOSS_PAY_CLIENT_KEY, customerKey)
    const paymentMethodsWidgetRef = useRef(null)

    useEffect(() => {
        if (paymentWidget == null) {
            return
        }
        const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
            "#payment-widget",
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
        const data = {
            orderId: orderId,
            postId: 175,
            postType: postType,
            amount: price
        }
        await PaymentApi.confirmTossPay(data, file)
    }

    return (
        <div className="wrapper fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="box_section w-1/2">
                <div id="payment-widget"/>
                <div id="agreement"/>
                <div className="result wrapper">
                    <Button text="결제하기"
                            className="w-64"
                            onClick={async () => {
                                try {
                                    const orderId = nanoid()
                                    await confirmTossPay(orderId)
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
                const result = await loadPaymentWidget(clientKey, customerKey);
                setData(result);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [clientKey, customerKey]);

    return { data, isLoading, error };
}

export default TossPayModal;
