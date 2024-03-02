import React from "react";

import ContentBoxFull from "../../components/common/ContentBox/ContentBoxFull";
import PopupCurrent from "../../components/business/DashBoard/PopupCurrent";
import PopupRanking from "../../components/business/DashBoard/PopupRanking";
import PopupStatistics from "../../components/business/DashBoard/PopupStatistics";
import PopupPostList from "../../components/business/DashBoard/PopupPostList";

/**
 * DashBoard 페이지 제작
 *
 * @since 2024.02.28
 * @author 이승민
 */
const DashBoard = () => {
    return (
        <div className="createPlan">
            <div className="first-bar h-fit my-6 items-stretch flex gap-8 justify-between mx-4">
                <div className="flex-grow" style={{ flex: "2" }}>
                        <ContentBoxFull title="팝업스토어 현황" content={<PopupCurrent/>}/>
                </div>
                <div className="flex-grow"style={{ flex: "1" }}>
                    <ContentBoxFull title="팝업스토어 순위" content={<PopupRanking/>}/>
                </div>
            </div>

            <div className="second-bar h-fit my-6 items-stretch flex gap-8 justify-between mx-4">
                <div className="flex-grow" style={{ flex: "1" }}>
                <   ContentBoxFull title="카테고리 별 커뮤니티 게시글 수 통계" content={<PopupStatistics/>}/>
                </div>
                <div className="flex-grow" style={{ flex: "1" }}>
                    <ContentBoxFull title="나의 팝업스토어 게시글 목록" content={<PopupPostList/>}/>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
