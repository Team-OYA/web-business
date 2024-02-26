import React, { useState, useEffect } from "react";

import Table from "../../components/common/Table/Table";
import UserApi from "../../api/userApi";
import ContentBox from "../../components/common/ContentBox/ContentBox";

/**
 * Business 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Business = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserApi.getBusiness();
                
                const mappedData = response.data.data.map(user => {
                    const mappedUser = {
                        userId: user.userId || "-",
                        nickname: user.nickname || "-",
                        email: user.email || "-",
                        birthDate: user.birthDate || "-",
                        gender: user.gender || "-",
                        registrationType: user.registrationType || "-",
                        userType: user.userType || "-",
                        usersCreatedDate: user.usersCreatedDate || "-",
                        usersModifiedDate: user.usersModifiedDate || "-",
                        deleted: user.deleted || false,
                        communityCount: user.communityCount || 0,
                    };
                    return mappedUser;
                });
                const headerTitles = Object.keys(mappedData[0]);
                const userDataArray = mappedData.map(user => Object.values(user));
                setUserData({
                    headerTitles: headerTitles,
                    sampleData: userDataArray,
                });
            } catch (error) {
                console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="user">
            <ContentBox
                title="사업체 목록"
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

export default Business;
