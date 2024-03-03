import React, { useState } from "react";

import CustomNavibar from "../Navibar/CustomNavibar";
import SidebarItem from "./SidebarItems";
import DropdownItem from "./DropdownItems";

const Sidebar = ({ color, sideBarColor, sideBarList, content, homeUrl }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    /**
     * 로그아웃
     *
     * @since 2024.02.29
     * @author 이상민
     */
    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('userToken');
    }
    return (
        <>
            <CustomNavibar color={color} homeUrl={homeUrl}/>
            <aside
                id="sidebar-multi-level-sidebar"
                className={`fixed top-2 left-0 z-40 w-60 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar"
            >
                <div className={`h-full py-4 overflow-y-auto bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}>
                    <ul className="space-y-2 font-medium">
                        {sideBarList.map((item, index) => (
                            Array.isArray(item[1]) ? (
                                <DropdownItem key={index} name={item[0]} itemList={item[1]} onClick={() => handleItemClick(item[1])} isActive={activeItem === item[1]} sideBarColor={sideBarColor}/>
                            ) : (
                                <SidebarItem key={index} href={item[1]} text={item[0]} onClick={() => handleItemClick(item[1])} isActive={activeItem === item[1]} sideBarColor={sideBarColor}/>
                            )
                        ))}
                    </ul>
                    <ul className="pt-2 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="/"
                               className="flex items-center p-3 text-gray-text-color-700 text-sm transition duration-75 rounded-lg hover:bg-light-gray-50 dark:hover:bg-gray-700 dark:text-white group"
                               onClick={() => handleLogout()}>
                                <span className="ms-3">로그아웃</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    {content}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
