import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import React from "react";

import './index.css';

import Main from "./pages/main";
import Login from "./pages/common/login";
import Signup from "./pages/common/signup";
import DashBoard from "./pages/business/dashboard";
import User from "./pages/administrator/user";
import Business from "./pages/administrator/business";
import Community from "./pages/administrator/community";
import Plan from "./pages/administrator/plan";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Home from "./pages/common/home";
import CreatePlan from "./pages/business/createPlan";
import Ad from "./pages/business/ad";
import Plans from "./pages/business/plans";
import BusinessPlanDetail from "./pages/business/plan";
import AdminPlainDetail from "./pages/administrator/adminPlanDetail";
import AdminChat from "./pages/administrator/adminChat";
import Chat from "./pages/business/chat";

/**
 * @since 2024.02.25
 * @author 이상민
 */
function App() {

    const businessColor = "bg-main-color-600 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700";
    const businessSideBarColor = "bg-main-color-600 text-white dark:bg-blue-600";

    const adminColor = "bg-main-blue-600 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700";
    const adminSideBarColor = "bg-main-blue-600 dark:bg-blue-600";

    const businessSideBarList = [
        ['대시보드', '/dashboard'], ['나의 사업계획서 목록', '/plans'], ['팝업 스토어 제안', '/plan/create'], ['광고 신청', '/ad/create'], ['1:1 채팅상담', '/chat']
    ];
    const adminSideBarList = [
        ['사용자 관리', [['일반 사용자 관리', '/admin/users'], ['사업체 관리', '/admin/business']]],
        ['사업계획서 관리', '/admin/plan'], ['커뮤니티 관리', '/admin/community'], ['문의 관리', '/admin/chat']
    ];

    const businessHomeUrl = "/dashboard"
    const adminHomeUrl = "/admin/plan"

    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login/business' element={<Login businessHomeUrl={businessHomeUrl} adminHomeUrl={adminHomeUrl} />} />
                    <Route path='/login/admin' element={<Login businessHomeUrl={businessHomeUrl} adminHomeUrl={adminHomeUrl} />} />
                    <Route path='/signup' element={<Signup />} />

                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/dashboard", DashBoard)}
                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/plans", Plans)}
                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/plans/:planId", BusinessPlanDetail)}
                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/plan/create", CreatePlan)}
                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/ad/create", Ad)}
                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/chat", Chat)}
                    {generateRoute(businessColor, businessSideBarColor, businessSideBarList, businessHomeUrl, "/chat/:roomId", BusinessChatRoom)}

                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/users', User)}
                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/business', Business)}
                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/plan', Plan)}
                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/plan/:planId', AdminPlainDetail)}
                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/community', Community)}
                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/chat', AdminChat)}
                    {generateRoute(adminColor, adminSideBarColor, adminSideBarList, adminHomeUrl, '/admin/chat/:roomId', AdminChatRoom)}
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

const generateRoute = (color, sideBarColor, sideBarList, path, Component) => (
    <Route
        key={path}
        path={path}
        element={[
            <Sidebar key="sidebar" color={color} sideBarColor={sideBarColor} sideBarList={sideBarList} content={<Component />} />
        ]}
    />
);

export default App;
