import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * OutlineCircleButton 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function OutlineCircleDisabledButton({ text, href , info}) {

    /**
     * useNavigate 컴포넌트로 페이지 이동시 값 전달 추가
     *
     * @since 2024.02.29
     * @author 이상민
     */
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(info);
        navigate(href, { state: { buttonText: text, ...info } });
    };

    return (
        <button type="button"
                    className="text-white border-2 border-white
                focus:ring-4 focus:outline-none focus:ring-main-color-300 font-medium text-sm px-8 py-2.5
                text-center mx-4 mb-2 dark:border-main-color-500 dark:text-main-color-500
                dark:focus:ring-main-color-800 rounded-full disabled"
                onClick={handleClick}>
                {text}
        </button>
    )
}

export default OutlineCircleDisabledButton;
