import React from "react";

/**
 * SidebarItem 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
// SidebarItem.js
const SidebarItem = ({ href, text, onClick, isActive, sideBarColor }) => (
    <li>
        <a
            href={href}
            onClick={(e) => {
                e.preventDefault();
                onClick(href);
            }}
            className={`flex items-center p-3 text-gray-900 dark:text-white hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700 group ${isActive ? `${sideBarColor}` : ""}`}
        >
            <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
        </a>
    </li>
);


export default SidebarItem;
