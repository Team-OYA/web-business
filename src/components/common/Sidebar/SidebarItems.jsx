import React from "react";

/**
 * SidebarItem 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const SidebarItem = ({ href, text, onClick, isActive, sideBarColor }) => (
    <li>
        <a
            href={href}
            onClick={(e) => {
                onClick(href);
            }}
            className={`flex items-center p-3 text-gray-text-color-700 text-sm dark:text-white hover:bg-light-gray-50 dark:hover:bg-gray-700 group ${isActive ? `${sideBarColor}` : ""}`}
        >
            <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
        </a>
    </li>
);


export default SidebarItem;
