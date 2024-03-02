import StatusImage from '../../../assets/images/img_dash_status.png';
import PopupStoreImage from '../../../assets/images/img_dash_popup.png';
import PopupCommunityImage from '../../../assets/images/img_dash_community.png';
import InfoList from '../../common/InfoList/InfoList';
import PopupCurrentApi from '../../../api/business/dashBoard/popupCurrnetApi';
import React, { useEffect, useState } from 'react';

function PopupCurrent() {
    const [communityInfo, setCommunityInfo] = useState([]);
    const [popupInfo, setPopupInfo] = useState([]);
    const [planInfo, setPlanInfo] = useState([]);

    useEffect(() => {
        const fetchPopupCurrent = async () =>{
            try {
                const response = await PopupCurrentApi.popupCurrnet();
                const communityData = [
                    {
                        title: '커뮤니티 게시글',
                        content: response.data.data.community.total
                    },
                    {
                        title: '광고 게시중',
                        content: response.data.data.community.ad
                    }
                ];
                const popupData = [
                    {
                        title: '팝업스토어 게시글',
                        content: response.data.data.popup.total
                    },
                    {
                        title: '광고 게시중',
                        content: response.data.data.popup.ad
                    }
                ]
                const planData = [
                    {
                        title: '제출한 사업계획서',
                        content: response.data.data.plan.approval
                    },
                    {
                        title: '입점 대기',
                        content: response.data.data.plan.waiting
                    },
                    {
                        title: '입점 요청',
                        content: response.data.data.plan.request
                    },
                    {
                        title: '입점 완료',
                        content: response.data.data.plan.total
                    },
                    {
                        title: '입점 거절',
                        content: response.data.data.plan.rejection
                    },
                    {
                        title: '입점 철회',
                        content: response.data.data.plan.withdrawal
                    }
                ];
                setCommunityInfo(communityData);
                setPopupInfo(popupData);
                setPlanInfo(planData);
            } catch (error) {
                console.error('팝업스토어 랭킹 조회 오류:', error);
                throw error;
            }
        };

        fetchPopupCurrent();
    }, []);

    return (
        <div className="popup-current flex justify-between px-3 py-4">
            <InfoList image={StatusImage} data={planInfo}/>
            <InfoList image={PopupStoreImage} data={popupInfo}/>
            <InfoList image={PopupCommunityImage} data={communityInfo}/>
        </div>
    );
}

export default PopupCurrent;
