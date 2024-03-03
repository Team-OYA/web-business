import React from "react";

/**
 * 나의 채팅 메시지 컴포넌트
 *
 * @since 2024.03.04
 * @author 이상민
 */
const MeChatMessage = ({ nickname, time, text }) => {
    return (
        <div className="flex items-end justify-end gap-2.5">
            <div
                className="flex flex-col w-full
                max-w-[320px] leading-1.5 p-4
                border-gray-200 rounded-tl-xl rounded-tr-none rounded-bl-xl rounded-br-xl
                bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-white">{nickname}</span>
                    <span className="text-sm font-normal text-gray-400">{time}</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-white">{text}</p>
            </div>
        </div>
    );
};

export default MeChatMessage;