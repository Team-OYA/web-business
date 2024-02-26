import {useState} from "react";

/**
 * OutlineButton 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 김유빈
 */
function OutlineButton(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <button type="button"
                className={`"text-main-color-700 hover:text-white border border-main-color-700 
                ${isClicked ? 'bg-main-color-800' : 'hover:bg-main-color-600'}
                active:bg-main-color-800 focus:bg-main-color-700 focus:text-white
                focus:ring-4 focus:outline-none focus:ring-main-color-300 font-medium rounded-lg text-sm px-5 py-2.5
                text-center me-2 mb-2"`}
                onClick={handleClick}>
            {props.text}
        </button>
    )
}

export default OutlineButton;
