import ContentBox from "../../components/common/ContentBox/ContentBox";
import InputText from "../../components/common/Input/InputText";
import RadioGroup from "../../components/common/Radio/RadioGroup";
import PaymentButton from "../../components/common/Button/PaymentButton";
import TossPayImage from "../../assets/icon/toss_pay.png";
import KakaoPayImage from "../../assets/icon/kakao_pay.png";
import NaverPayImage from "../../assets/icon/naver_pay.png";
import React, {useState} from "react";
import TossPayModal from "../../components/business/TossPayModal/TossPayModal";
import BuyerContentBox from "../../components/business/BuyerContentBox/BuyerContentBox";
import SelectedAdPost from "../../components/business/SelectedAdPost/SelectedAdPost";
import MyCommunityApi from "../../api/business/createAd/myCommunityApi";
import FileUpload from "../../components/common/Input/FileUpload";
import MyPopupApi from "../../api/business/createAd/myPopupApi";
import Button from "../../components/common/Button/Button";
import FloatingButton from "../../components/business/FloatingButton/FloatingButton";

/**
 * Ad 페이지 제작
 *
 * @since 2024.02.26
 * @author 김유빈
 */
const Ad = () => {
    const [price, setPrice] = useState(0)
    const [postType, setPostType] = useState("")
    const [mainImage, setMainImage] = useState(<></>)
    const [mainImageFile, setMainImageFile] = useState(null)
    const [isOpen, setOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(null)
    const [selectedPayment, setSelectedPayment] = useState(null)

    const handleMainImageFileChange = (event) => {
        setMainImageFile(event.target.files[0])
    }
    const handleAdCategoryChange = convertAboutPost(setPrice, setPostType, setMainImage, setPosts, handleMainImageFileChange)
    const handleClickTossPaymentButton = () => {
        setOpen(true)
    }
    const handleSelectedPaymentItem = (item) => {
        setSelectedPayment(item)
    }

    return (
        <>
            <div className="flex">
                <div className="flex-auto">
                    <ContentBox
                        title="광고 금액 선정"
                        content={
                            <>
                                <RadioGroup
                                    title="광고 분류"
                                    content={
                                        [
                                            {title: "팝업스토어 게시글", value: "popup"},
                                            {title: "커뮤니티 게시글", value: "community"}
                                        ]
                                    }
                                    onRadioChange={handleAdCategoryChange}/>
                                {mainImage}
                            </>
                        }/>
                    <SelectedAdPost posts={posts} setPostId={setPostId}/>
                </div>
                <div className="flex-auto">
                    <BuyerContentBox/>
                    <ContentBox
                        title="결제 방법"
                        content={
                            <>
                                <div className="flex items-center">
                                    <PaymentButton
                                        url={TossPayImage}
                                        value="toss"
                                        onClick={handleSelectedPaymentItem}
                                        selectedItem={selectedPayment}/>
                                    <PaymentButton
                                        url={KakaoPayImage}
                                        value="kakao"
                                        onClick={handleSelectedPaymentItem}
                                        selectedItem={selectedPayment}/>
                                    <PaymentButton
                                        url={NaverPayImage}
                                        value="naver"
                                        onClick={handleSelectedPaymentItem}
                                        selectedItem={selectedPayment}/>
                                    {isOpen && (
                                        <TossPayModal
                                            postId={postId}
                                            postType={postType}
                                            price={price}
                                            file={mainImageFile}/>
                                    )}
                                </div>
                            </>
                        }/>
                    <ContentBox
                        title="최종 결제금액"
                        content={
                            <>
                                <InputText title="총 결제금액" value={`${formatNumberWithCommas(price)} 원`} disabled="true"/>
                                <Button text="결제하기" onClick={handleClickTossPaymentButton}/>
                            </>
                        }/>
                    <FloatingButton />
                </div>
            </div>
        </>
    )
}

/**
 * 광고 분류에 따라 데이터 전환
 *
 * @since 2024.03.03
 * @author 김유빈
 */
function convertAboutPost(setPrice, setPostType, setMainImage, setPosts, onChangeMainImageFile) {
    return async (value) => {
        let price = 0
        let data = null
        let mainImage = <></>
        if (value === "popup") {
            price = 1_000_000
            const response = await MyPopupApi.getMyPopups(0, 5)
            data = response.data.data.popups.map(popup => {
                const createdDate = popup.pulledDate.split(" ")[0];
                return {
                    id: popup.popupId,
                    title: popup.title,
                    date: createdDate,
                }
            })
            mainImage = AdMainImage(onChangeMainImageFile)
        } else if (value === "community") {
            price = 50_000
            const response = await MyCommunityApi.getMyCommunities(0, 5)
            data = response.data.data.communityDetailResponseList.map(community => {
                return {
                    id: community.communityId,
                    title: community.title,
                    date: community.createdDate,
                }
            })
        }
        setPrice(price)
        setPostType(value)
        setPosts(data)
        setMainImage(mainImage)
    };
}

function AdMainImage(onChange) {
    return <FileUpload title="메인 이미지" onChange={onChange}/>
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Ad;
