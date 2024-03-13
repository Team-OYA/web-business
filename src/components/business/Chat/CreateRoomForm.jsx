import React, {useState} from 'react';
import Button from "../../common/Button/Button";
import ChatApi from "../../../api/chatApi";

/**
 * 채팅방 생성하기 컴포넌트
 *
 * @since 2024.03.12
 * @author 이상민
 */
const CreateRoomForm = ({ onClose }) => {

    const [roomName, setRoomName] = useState('');

    const createChatRoom = async (roomName) => {
        try {
            console.log("채팅방 생성 요청:", roomName);
            const response = await ChatApi.createChatRoom(roomName);
            console.log(response.data.data)
            console.log("채팅방 생성 성공:", roomName);
            onClose();
        } catch (error) {
            console.error("채팅방 생성 오류:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createChatRoom(roomName);
    };

    return (
        <div className="rounded-rectangle">
            <form className="max-w-sm mx-auto p-4" onSubmit={handleSubmit}
                  style={{
                      marginLeft: '20px',
                      marginRight: '20px',
                      marginTop: '215px',
                      textAlign: 'center',
                      justifyContent: 'center'
                  }}>
                <label htmlFor="roomName" className="block mb-2 font-medium text-gray-900">문의사항이 있으신가요? </label>
                <input
                    type="text"
                    id="roomName"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ex) 더현대 서울 팝업 문의 드립니다."
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)} // onChange 이벤트 핸들러를 올바르게 바인딩했는지 확인합니다.
                />
                <div style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Button 컴포넌트의 onClick prop을 전달합니다. */}
                    <Button text={<span className="flex items-center justify-center">채팅방 생성하기</span>}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSubmit(e);
                                }
                            }}/>
                </div>
            </form>
            <button className="close-button" onClick={onClose}>
                뒤로가기
            </button>
        </div>
    );
};

export default CreateRoomForm;