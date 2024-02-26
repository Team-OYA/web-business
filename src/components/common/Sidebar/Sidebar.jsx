import React from "react";

import CustomNavibar from "../Navibar/CustomNavibar";

import SidebarItem from "./SidebarItems";
import DropdownItem from "./DropdownItems";

/**
 * SideBar 컴포넌트 생성
 *
 * @since 2024.02.25
 * @author 이상민
 */
const Sidebar = ({ color, sideBarList, content }) => {
    return (
        <>
            <CustomNavibar color={color}/>
            <aside
                id="sidebar-multi-level-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full ${color}`}
                aria-label="Sidebar"
            >
                <div className={`h-full px-3 py-4 overflow-y-auto ${color}`}>
                    <ul className="space-y-2 font-medium">
                        {sideBarList.map((item, index) => (
                            Array.isArray(item[1]) ? (
                                <DropdownItem key={index} name={item[0]} itemList={item[1]} />
                            ) : (
                                <SidebarItem key={index} href={item[1]} text={item[0]} />
                            )
                        ))}
                    </ul>
                </div>
            </aside>
            <div className="p-4 sm:ml-64">
                <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    {content}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
