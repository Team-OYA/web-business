import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItems";
import TailwindIcon from "../../TailwindIcon";
import DropdownItem from "./DropdownItems";

const Sidebar = ({ sideBarList }) => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleItemClick = (path) => {
        setSidebarOpen(false);
        navigate(path);
    };

    return (
        <>
            <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                onClick={toggleSidebar}
                className={`inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
                    sidebarOpen ? "bg-gray-100" : ""
                }`}
            >
                <span className="sr-only">Open sidebar</span>
                <TailwindIcon pathData="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
            </button>

            <aside
                id="sidebar-multi-level-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {sideBarList.map((item, index) => (
                            Array.isArray(item[1]) ? (
                                <DropdownItem key={index} name={item[0]} itemList={item[1]} />
                            ) : (
                                <SidebarItem key={index} onClick={() => handleItemClick(item[1])} text={item[0]} />
                            )
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
