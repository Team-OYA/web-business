import React from "react";
import Logo from "../../../assets/icon/logo.png";

/**
 * Navibar 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const CustomNavibar = ({color}) => {
    return (
        <nav className={`fixed top-0 z-50 w-full border-b ${color}`}>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <a href="#" className="flex ms-3 md:me-24">
                            <img
                                src={Logo}
                                className="h-7 me-3"
                                alt="FlowBite Logo"
                            />
                        </a>
                    </div>
                    
                </div>
            </div>
        </nav>

    );
}

export default CustomNavibar;
