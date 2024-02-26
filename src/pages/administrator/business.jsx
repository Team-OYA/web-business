import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";
import UserApi from "../../api/userApi";

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

                const mappedData = response.data.data.map((user, index) => {
                    return {
                        businessRegistrationNumber: user.businessRegistrationNumber ? user.businessRegistrationNumber : "-",
                        nameOfCompany: user.nameOfCompany ? user.nameOfCompany : "-",
                        nameOfRepresentative: user.nameOfRepresentative ? user.nameOfRepresentative : "-",
                        businessItem: user.businessItem ? user.businessItem : "-",
                        dateOfBusinessCommencement: user.dateOfBusinessCommencement ? user.dateOfBusinessCommencement : "-",
                        nickname: user.nickname ? user.nickname : "-",
                        planCount: user.planCount ? user.planCount : 0,
                        popupCount: user.popupCount ? user.popupCount : 0,
                        communityCount: user.communityCount ? user.communityCount : 0,
                        deleted: user.deleted ? "탈퇴" : "활동",
                    };
                });

                const userDataArray = mappedData.map((user, index) => [index + 1, ...Object.values(user)]); 
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

    const headerTitles = ["사업자 등록번호", "상호명", "대표명", "사업종류", "개업일", "가입자", "사업계획서 수", "팝업 수", "게시글 수", "상태"];

    return (
        <div className="user">
            <h4 class="text-xl font-extrabold dark:text-black">사업체 목록</h4>
            <br/>
            {userData && userData.headerTitles ? (
                <Table headerTitles={userData.headerTitles} sampleData={userData.sampleData || []} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Business;
