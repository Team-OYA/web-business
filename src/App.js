import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";

import './index.css';

import Main from "./pages/main";
import Login from "./pages/common/login";
import Signup from "./pages/common/signup";
import DashBoard from "./pages/business/dashboard";
import User from "./pages/administrator/user";
import Business from "./pages/administrator/business";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Home from "./pages/common/home";
import CreatePlan from "./pages/business/createPlan";
import Ad from "./pages/business/ad";

/**
 * @since 2024.02.25
 * @author 이상민
 */
function App() {

    const businessColor = "bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700";
    const adminColor = "bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700";

    const businessSideBarList = [['대시보드', '/dashboard'], ['팝업 스토어 제안', '/plan/create'], ['광고 신청', '/ad/create']];
    const adminSideBarList = [['사용자 관리', [['일반 사용자 관리', '/admin/users'], ['사업체 관리', '/admin/business']]], ['팝업 관리', '#'], ['게시글 관리', '#']];

    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />

                    {generateRoute(businessColor, businessSideBarList, "/dashboard", DashBoard)}
                    {generateRoute(businessColor, businessSideBarList, "/plan/create", CreatePlan)}
                    {generateRoute(businessColor, businessSideBarList, "/ad/create", Ad)}

                    {generateRoute(adminColor, adminSideBarList, '/admin/users', User)}
                    {generateRoute(adminColor, adminSideBarList, '/admin/business', Business)}
                </Routes>
            </Main>
        </BrowserRouter>

    );
}

const generateRoute = (color, sideBarList, path, Component) => (
    <Route
        key={path}
        path={path}
        element={[
            <Sidebar key="sidebar" color={color} sideBarList={sideBarList} content={<Component />} />
        ]}
    />
);

export default App;
