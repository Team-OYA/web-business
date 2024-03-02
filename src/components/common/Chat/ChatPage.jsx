import React, { useEffect, useState } from "react";
import ContentBox from "../../common/ContentBox/ContentBox";
import Pagination from "../../common/Pagination/Pagination";
import ChatTable from "../../common/Table/ChatTable";

const ChatPage = ({ api, title }) => {
    const [data, setData] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(null);

    const headerTitles = ["순번", "제목", "생성일", "수정일"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getChatRooms(page - 1, limit);
                const mappedData = response.data.data.list.map((chatRoom, index) => {
                    const sequenceNumber = index + 1 + (page - 1) * limit;
                    return {
                        pkId: chatRoom.chatRoomId || "-",
                        sequenceNumber,
                        title: chatRoom.name ? chatRoom.name : "-",
                        createdDate: chatRoom.createdDate ? chatRoom.createdDate : "-",
                        modifiedDate: chatRoom.modifiedDate ? chatRoom.modifiedDate : "-",
                    };
                });
                setData({
                    headerTitles,
                    sampleData: mappedData.map((chatRoom) => [...Object.values(chatRoom)]),
                });
                setSize(response.data.data.sum);
            } catch (error) {
                console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchData();
    }, [page, limit, api]);

    return (
        <div className="chat">
            <ContentBox
                title={title}
                content={
                    <>
                        {data && data.headerTitles && data.sampleData ? (
                            <>
                                <ChatTable headerTitles={data.headerTitles} sampleData={data.sampleData} />
                                <br />
                                <footer>
                                    <Pagination total={size} limit={limit} page={page} setPage={setPage} />
                                </footer>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </>
                }
            >
            </ContentBox>
        </div>
    );
};

export default ChatPage;
