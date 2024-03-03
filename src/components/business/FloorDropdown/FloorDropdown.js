import {useEffect, useState} from "react";
import MultipleDropdown from "../../common/Dropdown/MultipleDropdown";
import DepartmentsApi from "../../../api/business/createPlan/departmentsApi";

/**
 * FloorDropdown 컴포넌트 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function FloorDropdown({setCategory, setFloor}) {
    const [floors, setFloors] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DepartmentsApi.getFloors()
                const data = response.data.data.categories.map(category => {
                    const code = category.code
                    const description = category.description
                    const floors = category.floors.map((floor, index) => {
                        return {
                            code: floor.code,
                            description: floor.description
                        }
                    })
                    return {
                        code,
                        description,
                        data: floors
                    }
                })
                setFloors(data.filter(category => category.description !== "전체 조회"))
            } catch (error) {
                console.error("현대백화점 층수 데이터를 가져오는 중 에러 발생: ", error)
            }
        }
        fetchData()
    }, []);
    return (
        <>
            <MultipleDropdown title="팝업스토어 위치 선정" data={floors} setFirst={setCategory} setSecond={setFloor}/>
        </>
    )
}

export default FloorDropdown;
