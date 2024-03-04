import WebSocketConnect from "./WebSocketConnect";

/**
 * 채팅방 컴포넌트
 *
 * @since 2024.03.02
 * @author 이상민
 */
const ChatRoomDetail = ({role}) => {
    return (
        <div className="rounded-rectangle">
            <div className="content">
                <WebSocketConnect role={role}/>
            </div>
        </div>
    );
};

export default ChatRoomDetail;
