import React, { useEffect, useState } from "react";

import Table from "../../components/common/Table/Table";
import CommunityApi from "../../api/communityApi";
import Pagination from "../../components/common/Pagination/Pagination";
import ContentBox from "../../components/common/ContentBox/ContentBox";

/**
 * Community 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Community = () => {
    const [data, setData] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(null);

    const headerTitles = ["순번", "카테고리", "작성자", "제목", "게시글 종류", "생성일", "수정일", "사용자유형", "상태"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CommunityApi.getCommunities(page - 1, limit);

                const mappedData = response.data.data.communityDetailResponseList.map((community, index) => {
                    const communityType =
                        community.communityType === "vote" ? "투표" : community.communityType === "basic" ? "일반" : "-";

                    // 페이징 처리를 고려한 순번 계산
                    const sequenceNumber = index + 1 + (page - 1) * limit;
                    return {
                        sequenceNumber,
                        categoryDescription: community.categoryDescription ? community.categoryDescription : "-",
                        nickname: community.nickname ? community.nickname : "-",
                        title: community.title ? community.title : "-",
                        communityType,
                        createdDate: community.createdDate ? community.createdDate : "-",
                        modifiedDate: community.modifiedDate ? community.modifiedDate : "-",
                        userType: community.userType ? community.userType : "-",
                        deleted: community.deleted ? "Deleted" : "Not Deleted",
                    };
                });

                setData({
                    headerTitles,
                    sampleData: mappedData.map((user) => [...Object.values(user)]),
                });
                setSize(response.data.data.listSize);
            } catch (error) {
                console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, [page, limit]);

    return (
        <div className="community">
            <ContentBox
                title="커뮤니티 목록"
                content={
                    <>
                        {data && data.headerTitles && data.sampleData ? (
                            <>
                                <Table headerTitles={data.headerTitles} sampleData={data.sampleData} />
                                <br />
                                <footer>
                                    <Pagination total={size} limit={limit} page={page} setPage={setPage} />
                                </footer>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </>
                }
            >
            </ContentBox>
        </div>
    );
};

export default Community;
