import {useParams} from "react-router-dom";
import WebSocketConnect from "./WebSocketConnect";

const ChatRoomDetail = ({role}) => {

    const { chatRoomId } = useParams();
    const longChatRoomId = parseInt(chatRoomId, 10);

    const handleGoBack = () => {
        window.history.back(); // Use the window.history object to go back
    };

    return (
        <div className="rounded-rectangle">
            <div className="content">
                <button className="back-button" onClick={handleGoBack}>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>
                <WebSocketConnect role={role}/>
            </div>
        </div>
    );
};

export default ChatRoomDetail;
