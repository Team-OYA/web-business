import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";
import ContentBox from "../../components/common/ContentBox/ContentBox";
import Pagination from "../../components/common/Pagination/Pagination";
import AdminUserApi from "../../api/administrator/adminUserApi";

/**
 * Business 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Business = () => {
    const [data, setData] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(null);

    const headerTitles = ["순번", "사업자 등록번호", "회사명", "대표명", "종목", "연락처", "사업장", "사업계획서 수", "팝업 수", "게시글 수"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AdminUserApi.getBusiness();
                
                const mappedData = response.data.data.userList.map((user,index) => {
                    const sequenceNumber = index + 1
                    return {
                        pkId: user.userId || "-",
                        sequenceNumber,
                        businessRegistrationNumber: user.businessRegistrationNumber || "-",
                        nameOfCompany: user.nameOfCompany || "-",
                        nameOfRepresentative: user.nameOfRepresentative || "-",
                        businessItem: user.businessItem || "-",
                        connectedNumber: user.connectedNumber || "-",
                        businessAddress: user.businessAddress || "-",
                        planCount: user.planCount || 0,
                        popupCount: user.popupCount || 0,
                        communityCount: user.communityCount || 0,
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
        <div className="user">
            <ContentBox
                title="사업체 목록"
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

export default Business;
