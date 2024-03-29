import ContentBox from "../../components/common/ContentBox/ContentBox";
import CategoryDropdown from "../../components/business/CategoryDropdown/CategoryDropdown";
import EntranceStatusDropdown from "../../components/business/EntranceStatusDropdown/EntranceStatusDropdown";
import MyPlanTable from "../../components/business/MyPlanTable/MyPlanTable";
import React, {useEffect, useState} from "react";
import MyPlansApi from "../../api/business/plans/myPlansApi";
import SearchButton from "../../components/common/Button/SearchButton";
import FloatingButton from "../../components/business/FloatingButton/FloatingButton";

/**
 * Plans 페이지 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function Plans() {
    const [category, setCategory] = useState("")
    const [entranceStatus, setEntranceStatus] = useState("")
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [plans, setPlans] = useState([])

    useEffect(() => {
        const fetchData = getPlans(category, entranceStatus, page, limit, setTotal, setPlans)
        fetchData()
    }, [])

    return (
        <div className="dashBoard">
            <ContentBox
                title="나의 사업계획서 목록"
                content={
                    <>
                        <div className="flex justify-end items-center mb-6">
                            <CategoryDropdown setCategory={setCategory}/>
                            <EntranceStatusDropdown setEntranceStatus={setEntranceStatus}/>
                            <SearchButton
                                onClick={getPlans(category, entranceStatus, page, limit, setTotal, setPlans)}/>
                        </div>
                        <MyPlanTable plans={plans} page={page} limit={limit} total={total} setPage={setPage}/>
                        <FloatingButton />
                    </>
                }/>
        </div>
    )
}

function getPlans(category, entranceStatus, page, limit, setTotal, setPlans) {
    return async () => {
        try {
            const response = await MyPlansApi.getMyPlans(category, entranceStatus, page, limit)
            const data = response.data.data.plans.map((plan, index) => {
                const sequenceNumber = index + 1 + page * limit
                const {
                    id,
                    office,
                    floor,
                    openDate,
                    closeDate,
                    entranceStatus,
                    category,
                    writtenPopup,
                    createdDate
                } = plan
                const officeInfo = `${office} ${floor}`
                const dateRange = `${openDate} ~ ${closeDate}`
                const writtenStatus = writtenPopup ? '작성' : '미작성'
                return {
                    pkId: id,
                    id: sequenceNumber,
                    office: officeInfo,
                    openDate: dateRange,
                    entranceStatus,
                    category,
                    writtenPopup: writtenStatus,
                    createdDate
                }
            })
            setTotal(response.data.data.total)
            setPlans(data.map((plan) => [...Object.values(plan)]),)
        } catch (error) {
            console.log("나의 사업계획서 목록 데이터를 가져오는 중 오류 발생: ", error)
        }
    };
}

export default Plans;
