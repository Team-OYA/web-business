import {useEffect, useState} from "react";
import Dropdown from "../../common/Dropdown/Dropdown";
import EntranceStatusesApi from "../../../api/business/plans/entranceStatusesApi";

/**
 * EntranceStatusDropdown 컴포넌트 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function EntranceStatusDropdown() {
    const [entranceStatuses, setEntranceStatuses] = useState(["전체 조회"])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EntranceStatusesApi.getEntranceStatuses()
                const data = response.data.data.entranceStatus.map(status => status.description)
                setEntranceStatuses(data)
            } catch (error) {
                console.log("사업계획서 진행 단계 데이터를 가져오는 중 오류 발생: ", error)
            }
        }
        fetchData()
    }, [])
    return (
        <Dropdown dropdownId="progressButton" buttonId="progresses" title="진행 단계" categories={entranceStatuses}/>
    )
}

export default EntranceStatusDropdown;
