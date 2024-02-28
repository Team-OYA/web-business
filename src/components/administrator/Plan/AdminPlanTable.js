import {useEffect, useState} from "react";
import CategoryApi from "../../../api/categoryApi";
import Table from "../../common/Table/Table";
import Pagination from "../../common/Pagination/Pagination";

/**
 * MyPlanTable 컴포넌트 제작
 *
 * @since 2024.02.29
 * @author 아상민
 */

const PRODUCT_DATA = [
    { id: null, value: '상품을 선택하세요.' },
    { id: '0001', value: '딸기 100g' },
    { id: '0002', value: '포도 100g' },
    { id: '0003', value: '방울토마토 100g' },
    { id: '0004', value: '블루베리 100g' },
    { id: '0005', value: '홍시 100g' },
    { id: '0006', value: '귤 100g' },
    { id: '0007', value: '금귤 100g' },
    { id: '0008', value: '라즈베리 100g' },
];

function AdminPlanTable({ entranceStatuses }) {

    const headers = ["번호", "오픈 지점", "오픈 일정", "진행 단계", "카테고리", "게시글 작성 여부", "작성일"]
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [plans, setPlans] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CategoryApi.getAllPlan("CG000003", "", page, limit)
                const data = response.data.data.plans.map((plan, index) => {
                    const sequenceNumber = index + 1 + page * limit
                    const { id, office, floor, openDate, closeDate, entranceStatus, category, writtenPopup, createdDate } = plan
                    const pkId = id
                    const officeInfo = `${office} ${floor}`
                    const dateRange = `${openDate} ~ ${closeDate}`
                    const writtenStatus = writtenPopup ? '작성' : '미작성'
                    return {
                        pkId : id,
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
        }
        fetchData()
    }, [])

    console.log(plans)

    return (
        <>
            <Table headerTitles={headers} sampleData={plans}/>
            <Pagination total={total} limit={limit} page={page} setPage={setPage}/>
        </>
    )
}

export default AdminPlanTable;
