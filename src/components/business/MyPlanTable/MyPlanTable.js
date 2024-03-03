import Table from "../../common/Table/Table";
import Pagination from "../../common/Pagination/Pagination";

/**
 * MyPlanTable 컴포넌트 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function MyPlanTable({plans, page, limit, total, setPage}) {
    const headers = ["번호", "오픈 지점", "오픈 일정", "진행 단계", "카테고리", "게시글 작성 여부", "작성일"]

    return (
        <>
            <Table headerTitles={headers} sampleData={plans}/>
            <Pagination total={total} limit={limit} page={page} setPage={setPage}/>
        </>
    )
}

export default MyPlanTable;
