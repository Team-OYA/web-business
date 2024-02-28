import Table from "../../common/Table/Table";
import Pagination from "../../common/Pagination/Pagination";

function AdminPlanDetail() {

    return (
        <>
            <Table headerTitles={headers} sampleData={plans}/>
            <Pagination total={total} limit={limit} page={page} setPage={setPage}/>
        </>
    )
}

export default AdminPlanDetail;


