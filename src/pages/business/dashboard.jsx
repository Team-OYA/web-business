import React, {useState} from "react";
import ContentBox from "../../components/common/ContentBox/ContentBox";
import Table from "../../components/common/Table/Table";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import Pagination from "../../components/common/Pagination/Pagination";

/**
 * DashBoard 페이지 제작
 *
 * @since 2024.02.26
 * @author 김유빈
 */
const DashBoard = () => {
    const [page, setPage] = useState(0);
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
                content={
                <>
                    <Dropdown title="카테고리" categories={["문구", "식품", "화장품", "K-POP"]}/>
                    <Dropdown title="진행 단계" categories={["제안 요청", "제안 승인", "제안 거절", "제안 철회"]}/>
                    <Table headerTitles={data.headerTitles} sampleData={data.sampleData}/>
                    <Pagination total="500" limit="10" page={page} setPage={setPage}/>
                </>
            }/>
        </div>
    )
}

export default DashBoard;
