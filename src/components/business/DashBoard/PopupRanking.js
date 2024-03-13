import React, { useEffect, useState } from 'react';
import RankingList from '../../common/InfoList/RankingList';
import PopupRankingApi from '../../../api/business/dashBoard/popupRankingApi';

/**
 * 대시보드 팝업 랭킹
 *
 * @since 2024.02.27
 * @author 이승민
 */


function PopupRanking() {
    const [myPopup, setMyPopup] = useState([]);
    const [popupData, setPopupData] = useState([]);

    useEffect(() => {
        const fetchPopupRanking = async () =>{
            try {
                const response = await PopupRankingApi.popupRanking();
                const popupLankResponses = response.data.data.popupLankResponses.slice(0, 5);
                setPopupData(popupLankResponses);
                setMyPopup(response.data.data.myPopupLank);
            } catch (error) {
                console.error('팝업스토어 랭킹 조회 오류:', error);
                throw error;
            }
        };

        fetchPopupRanking();
    }, []);

    return (
        <div className="popup-ranking h-fit flex-col px-2 py-4 text-gray-text-color-700 text-sm">
            {myPopup.length > 0 && (
                <div className="info flex w-full justify-between align-middle bg-gray-100 rounded-lg px-4 py-3 mb-3">
                    <div className='flex'>
                        <div className='rank w-12'>
                            MY
                        </div>
                        <div className='title flex'>
                            {myPopup[0].popupName}
                        </div>
                    </div>
                    <div className='views flex w-12'>
                        <div className='views-unit'>
                        {myPopup[0].popupView} 회
                        </div>
                    </div>
                </div>
            )}
            {popupData.map(item => (
                <RankingList key={item.lank} id={item.lank} title={item.popupName} content={item.popupView} />
            ))}
        </div>
      );
      
}



export default PopupRanking;
