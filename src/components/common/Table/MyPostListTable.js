import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";

function MyPostListTable({ posts }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const itemsPerPage = 5;

    if (!posts) {
        posts = [];
    }

    const displayedData = posts.slice((currentPageIndex - 1) * itemsPerPage, currentPageIndex * itemsPerPage);

    const setPage = (pageIndex) => {
        setCurrentPageIndex(pageIndex);
    }

    return (
        <div className="flex flex-col w-full px-4">
            {posts.length === 0 ? (
                <div className="flex text-lg">작성한 게시글이 존재하지 않습니다.</div>
            ) : (
                <>
                    <table className="w-full text-sm text-left text-gray-500">
                        <tbody>
                        {displayedData.map((post, index) => (
                            <tr key={index} className="bg-white border-b text-gray-700">
                                <td>
                                    <div className="flex">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex">{post.title}</div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination total={posts.length} limit={itemsPerPage} page={currentPageIndex} setPage={setPage} />
                </>
            )}
        </div>
    );
}

export default MyPostListTable;
