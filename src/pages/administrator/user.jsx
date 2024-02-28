import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";
import UserApi from "../../api/userApi";
import ContentBox from "../../components/common/ContentBox/ContentBox";

/**
 * User 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const User = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserApi.getUsers();
                
                const mappedData = response.data.data.map((user, index) => {
                    const sequenceNumber = index + 1
                    return {
                        pkId: user.userId || "-",
                        sequenceNumber,
                        nickname: user.nickname || "-",
                        email: user.email || "-",
                        birthDate: user.birthDate || "-",
                        gender: user.gender || "-",
                        registrationType: user.registrationType || "-",
                        deleted: user.deleted ? "탈퇴" : "활동",
                        communityCount: user.communityCount || 0,
                    };
                });
                const userDataArray = mappedData.map((user, index) => [...Object.values(user)]);
                setUserData({
                    headerTitles: ["순번", ...headerTitles], 
                    sampleData: userDataArray,
                });
            } catch (error) {
                console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, []);

    const headerTitles = ["닉네임", "이메일", "생년월일", "성별", "가입유형", "상태", "게시글 수"];
    return (
        <div className="user">
            <ContentBox
                title="일반사용자 목록"
                content={
                    <>
                        {userData && userData.headerTitles ? (
                            <Table headerTitles={userData.headerTitles} sampleData={userData.sampleData || []} />
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
