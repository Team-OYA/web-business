import React from 'react';

/**
 * 시간
 *
 * @since 2024.03.04
 * @author 이상민
 */
const FormattedTime = ({ time }) => {
    const dateObject = new Date(time);
    const formattedTime = `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}.${dateObject.getDate().toString().padStart(2, '0')} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;

    return (
        <span className="text-sm font-normal text-gray-400">{formattedTime}</span>
    );
};

export default FormattedTime;

