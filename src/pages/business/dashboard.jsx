import React from "react";
import ContentBox from "../../components/common/ContentBox/ContentBox";
import Table from "../../components/common/Table/Table";

/**
 * DashBoard 페이지 제작
 *
 * @since 2024.02.26
 * @author 김유빈
 */
const DashBoard = () => {
    const data = {
        "headerTitles": ["번호", "오픈 지점", "오픈 일정", "진행 단계", "카테고리", "게시글 작성 여부", "게시글 수정 단계", "게시글 철회 단계", "작성일"],
        "sampleData": [
            [1, "더현대 서울 1층", "2024.01.15 ~ 2024.01.30", "제안 요청", "문구", "미작성", "수정 요청", "철회 요청", "2024.02.01"],
            [2, "더현대 서울 1층", "2024.01.15 ~ 2024.01.30", "제안 요청", "문구", "미작성", "수정 요청", "철회 요청", "2024.02.01"],
        ]
    }
    return (
        <div className="dashBoard">
            <ContentBox
                title="나의 사업계획서 목록"
                content={<Table headerTitles={data.headerTitles} sampleData={data.sampleData}/>}/>
        </div>
    )
}

export default DashBoard;
