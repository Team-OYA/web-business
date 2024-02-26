import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";

/**
 * PlanDetail 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const PlanDetail = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {

            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="planDetail">
            <h4 class="text-xl font-extrabold dark:text-black">사업계획서</h4>
            <br/>

        </div>
    );
};

export default PlanDetail;
