import React, {useEffect, useState} from "react";

import Table from "../../components/common/Table/Table";
import ContentBox from "../../components/common/ContentBox/ContentBox";
import PlanDetail from "./planDetail";
import PlanApi from "../../api/planApi";
import CategoryDropdown from "../../components/business/CategoryDropdown/CategoryDropdown";
import EntranceStatusDropdown from "../../components/business/EntranceStatusDropdown/EntranceStatusDropdown";
import AdminPlanTable from "../../components/administrator/Plan/AdminPlanTable";

function PopupDetail() {
    return null;
}

function PopupExtraDetail() {
    return null;
}

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
                        <CategoryDropdown/>
                        <EntranceStatusDropdown/>
                        <AdminPlanTable/>
                    </>
                }
            >
            </ContentBox>
        </div>
    );
};

export default Plan;
