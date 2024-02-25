import React from "react";

/**
 * SidebarItem 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const SidebarItem = ({ href, text }) => (
    <li>
        <a
            href={href}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
            <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
        </a>
    </li>
);

export default SidebarItem;
