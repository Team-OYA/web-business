import MultipleDropdown from "../../common/Dropdown/MultipleDropdown";
import {useEffect, useState} from "react";
import DepartmentsApi from "../../../api/business/createPlan/departmentsApi";

/**
 * DepartmentDropdown 컴포넌트 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function DepartmentDropdown({setOffice}) {
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DepartmentsApi.getDepartments()
                const data = response.data.data.departments.map(department => {
                    const code = department.code
                    const description = department.description
                    const branches = department.branches.map((branch, index) => {
                        return {
                            code: branch.code,
                            description: branch.description
                        }
                    })
                    return {
                        code,
                        description,
                        data: branches
                    }
                })
                setDepartments(data)
            } catch (error) {
                console.error("현대백화점 지점 데이터를 가져오는 중 에러 발생: ", error)
            }
        }
        fetchData()
    }, []);

    return (
        <>
            <MultipleDropdown title="현대백화점 지점 선택" data={departments} setSecond={setOffice}/>
        </>
    )
}

export default DepartmentDropdown;
