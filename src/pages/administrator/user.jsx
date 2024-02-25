import React, { useState, useEffect } from "react";

import Table from "../../components/common/Table/Table";
import UserApi from "../../api/userApi";

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

                const headerTitles = Object.keys(mappedData[0]).map(title => {
                    switch (title) {
                        case "userId":            return "사용자ID";
                        case "nickname":          return "닉네임";
                        case "email":             return "이메일";
                        case "birthDate":         return "생년월일";
                        case "gender":            return "성별";
                        case "registrationType":  return "가입유형";
                        case "userType":          return "사용자유형";
                        case "usersCreatedDate":  return "생성일자";
                        case "usersModifiedDate": return "수정일자";
                        case "deleted":           return "삭제여부";
                        case "communityCount":    return "커뮤니티개수";
                        default:                  return title;
                    }
                });
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
            {userData && userData.headerTitles ? (
                <Table headerTitles={userData.headerTitles} sampleData={userData.sampleData || []} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default User;
