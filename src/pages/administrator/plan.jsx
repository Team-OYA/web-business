import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";
import ContentBox from "../../components/common/ContentBox/ContentBox";

/**
 * Popup 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Plan = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArray = null;
                setData({
                    headerTitles: headerTitles,
                    sampleData: dataArray,
                });
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, []);
    const headerTitles = ["ID", "사업체 상호명", "연락처", "카테고리", "팝업 오픈 지점", "팝업 오픈 층수", "팝업 오픈 위치", "팝업 오픈 날짜", "팝업 종료 날짜", "사업계획서 다운로드", "팝업 입점 상태"];
    return(
        <div className="plan">
            <ContentBox
                title="사업계획서 목록"
                content={
                    <>
                        {data && data.headerTitles ? (
                            <Table headerTitles={data.headerTitles} sampleData={data.sampleData || []} />
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

export default Plan;
