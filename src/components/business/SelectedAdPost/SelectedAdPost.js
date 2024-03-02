import CheckedPostTable from "../../common/Table/CheckedPostTable";
import ContentBox from "../../common/ContentBox/ContentBox";
import React, {useEffect, useState} from "react";
import PopupApi from "../../../api/popupApi";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
function SelectedAdPost({pageNo, amount}) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PopupApi.getMyPopups("me", pageNo, amount)
                const data = response.data.data.popups.map(popup => {
                    return {
                        id: popup.popupId,
                        title: popup.title,
                        date: popup.createdDate,
                    }
                })
                console.log(response.data.data)
                setPosts(data)
            } catch (error) {
                console.error("나의 팝업스토어 게시글 데이터를 가져오는 중 오류 발생: ", error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <ContentBox
                title="게시글 선택"
                content={<CheckedPostTable count="0" posts={posts}/>}/>
        </>
    )
}

export default SelectedAdPost;
