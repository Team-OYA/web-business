import ContentBox from "../../components/common/ContentBox/ContentBox";
import CategoryDropdown from "../../components/business/CategoryDropdown/CategoryDropdown";
import EntranceStatusDropdown from "../../components/business/EntranceStatusDropdown/EntranceStatusDropdown";
import MyPlanTable from "../../components/business/MyPlanTable/MyPlanTable";
import Button from "../../components/common/Button/Button";

/**
 * Plans 페이지 제작
 *
 * @since 2024.02.27
 * @author 김유빈
 */
function Plans() {
    // todo: 카테고리 변경 시 변경한 상태 저장하여 API 재호출 및 리로드
    //  - dropdown 에 나타나있는 문구(카테고리) 를 선택한 카테고리 description 으로 변경

    // todo: 사업계획서 진행 단계 변경 시 변경한 상태 저장하여 API 재호출 및 리로드
    //  - dropdown 에 나타나있는 문구(진행 단계) 를 선택한 진행 단계 description 으로 변경
    return (
        <div className="dashBoard">
            <ContentBox
                title="나의 사업계획서 목록"
                content={
                    <>
                        <CategoryDropdown/>
                        <EntranceStatusDropdown/>
                        <MyPlanTable/>
                    </>
                }/>
        </div>
    )
}

export default Plans;
