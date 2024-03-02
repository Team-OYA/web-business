import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";
import ContentBox from "../../components/common/ContentBox/ContentBox";
import Pagination from "../../components/common/Pagination/Pagination";
import AdminUserApi from "../../api/administrator/adminUserApi";

/**
 * User 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const User = () => {
    const [data, setData] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(null);

    const headerTitles = ["순번", "닉네임", "이메일", "생년월일", "성별", "가입유형", "가입일","상태", "게시글 수"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AdminUserApi.getUsers(page-1, limit);
                
                const mappedData = response.data.data.userList.map((user, index) => {
                    const sequenceNumber = index + 1 + (page - 1) * limit;
                    return {
                        pkId: user.userId || "-",
                        sequenceNumber,
                        nickname: user.nickname || "-",
                        email: user.email || "-",
                        birthDate: user.birthDate || "-",
                        gender: user.gender || "-",
                        registrationType: user.registrationType || "-",
                        usersCreatedDate: user.usersCreatedDate || "-",
                        deleted: user.deleted ? "탈퇴" : "활동",
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
                title="일반사용자 목록"
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

export default User;
