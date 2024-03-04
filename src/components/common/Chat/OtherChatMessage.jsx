import React from "react";
import FormattedTime from "./FormattedTime";

/**
 * 나 이외의 채팅 메시지 컴포넌트
 *
 * @since 2024.03.04
 * @author 이상민
 */
const OtherChatMessage = ({ nickname, time, text }) => {
    return (
        <div className="flex items-start gap-2.5">
            <div
                className="flex flex-col w-full max-w-[240px]
                leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl"
                style={{ height: 'auto' }} >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900">{nickname}</span>
                    <FormattedTime time={time} />
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900">{text}</p>
            </div>
        </div>
    );
};

export default OtherChatMessage;