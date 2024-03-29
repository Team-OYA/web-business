import CheckedPostTable from "../../common/Table/CheckedPostTable";
import ContentBox from "../../common/ContentBox/ContentBox";
import React from "react";

/**
 * @since 2024.03.03
 * @author 김유빈
 */
function SelectedAdPost({posts, setPostId}) {
    return (
        <>
            <ContentBox
                title="게시글 선택"
                content={<CheckedPostTable posts={posts} setPostId={setPostId}/>}/>
        </>
    )
}

export default SelectedAdPost;
