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
        <div className="flex flex-row items-center justify-center">
            <button type="button"
                        className="text-white border-2 hover:bg-light-gray-1000 border-white whitespace-nowrap
                    focus:ring-4 focus:outline-none focus:ring-main-color-300 font-medium text-xl px-10 py-4
                    text-center mx-6 mb-2 dark:border-main-color-500 dark:text-main-color-500
                    dark:focus:ring-main-color-800 rounded-full disabled"
                    onClick={handleClick}>
                    {text}
            </button>
        </div>
    )
}

export default OutlineCircleDisabledButton;
