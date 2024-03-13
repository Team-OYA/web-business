import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import Button from "../../common/Button/Button";
import PaymentApi from "../../../api/business/createAd/paymentApi";
import swal from "sweetalert";

const customerKey = nanoid()

/**
 * @since 2024.02.29
 * @author 김유빈
 */
function TossPayModal({postId, postType, price, file}) {
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
                                    const baseUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_PREFIX}`
                                    await PaymentApi.confirmTossPay({
                                        orderId: orderId,
                                        postId: postId,
                                        postType: postType,
                                        amount: price
                                    }, file)
                                    const response = await paymentWidget?.requestPayment({
                                        orderId: orderId,
                                        orderName: "토스 티셔츠 외 2건",
                                        customerName: "김토스",
                                        customerEmail: "customer123@gmail.com",
                                        customerMobilePhone: "01012341234",
                                        successUrl: `${baseUrl}/payments/toss/success`,
                                        failUrl: `${baseUrl}/payments/toss/fail`
                                    })
                                    if (response.status === 200) {
                                        swal("광고 신청 완료", "광고 신청에 성공하였습니다!")
                                    }
                                } catch (error) {
                                    swal("결제 실패", error.message, "error")
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
