import ContentBox from "../../components/common/ContentBox/ContentBox";
import CategoryDropdown from "../../components/business/CategoryDropdown/CategoryDropdown";
import EntranceStatusDropdown from "../../components/business/EntranceStatusDropdown/EntranceStatusDropdown";
import MyPlanTable from "../../components/business/MyPlanTable/MyPlanTable";
import Button from "../../components/common/Button/Button";
import {useEffect, useState} from "react";
import MyPlansApi from "../../api/business/plans/myPlansApi";

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

    // todo: 검색 컴포넌트 새로 생성
    return (
        <div className="dashBoard">
            <ContentBox
                title="나의 사업계획서 목록"
                content={
                    <>
                        <CategoryDropdown setCategory={setCategory}/>
                        <EntranceStatusDropdown setEntranceStatus={setEntranceStatus}/>
                        <Button
                            text="검색"
                            onClick={getPlans(category, entranceStatus, page, limit, setTotal, setPlans)}/>
                        <MyPlanTable plans={plans} page={page} limit={limit} total={total} setPage={setPage}/>
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
