import React, { useEffect, useState } from "react";
import MyPostListTable from "../../common/Table/MyPostListTable";
import PopupMyApi from "../../../api/business/dashBoard/popupMyApi";


/**
 * 대시보드 팝업 리스트
 *
 * @since 2024.02.27
 * @author 이승민
 */

function PopupPostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPopupMy = async () =>{
            try {
                const response = await PopupMyApi.popupMy();
                setPosts(response.data.data.popups);
            } catch (error) {
                console.error('팝업스토어 랭킹 조회 오류:', error);
                throw error;
            }
        };

        fetchPopupMy();
    }, []);

    return (
        <div className="popup-current flex h-92 justify-between px-3 py-4">
            <MyPostListTable posts={posts} />
        </div>
    );
}

export default PopupPostList;
