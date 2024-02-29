import React, {useEffect, useState} from "react";

import ContentBox from "../../components/common/ContentBox/ContentBox";
import AdminPlanTable from "../../components/administrator/Plan/AdminPlanTable";
import axios from "axios";

/**
 * Plan 페이지 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Plan = () => {
    return(
        <div className="plan">
            <ContentBox
                title="사업계획서 목록"
                content={
                    <>
                        <AdminPlanTable/>
                    </>
                }
            >
            </ContentBox>
        </div>
    );
};

export default Plan;
