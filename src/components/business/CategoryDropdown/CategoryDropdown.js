import {useEffect, useState} from "react";
import CategoryApi from "../../../api/categoryApi";
import Dropdown from "../../common/Dropdown/Dropdown";

/**
 * CategoryDropdown 컴포넌트 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function CategoryDropdown() {
    const [categories, setCategories] = useState(["전체 조회"])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CategoryApi.getCategories()
                const data = response.data.data.categories.map(category => category.description)
                setCategories(data)
            } catch (error) {
                console.error("카테고리 데이터를 가져오는 중 오류 발생: ", error)
            }
        }
        fetchData()
    }, [])
    return (
        <Dropdown dropdownId="categoryButton" buttonId="categories" title="카테고리" categories={categories}/>
    )
}

export default CategoryDropdown;
