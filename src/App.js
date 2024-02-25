import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';

import Main from "./pages/main";
import Login from "./pages/common/login";
import Signup from "./pages/common/signup";
import DashBoard from "./pages/business/dashboard";
import User from "./pages/administrator/user";
import Test from "./pages/administrator/test";
import React from "react";
import Sidebar from "./components/common/Sidebar/CustomSidebar";

function App() {

    const businessSideBarList = [['대시보드', '/dashboard'], ['팝업 스토어 제안', '#'], ['광고 신청', '#']];
    const adminSideBarList = [['사용자 관리', [['일반 사용자 관리', '/admin/users'], ['사업체 관리', '#']]], ['팝업 관리', '#'], ['게시글 관리', '#']];

    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />

                    <Route path="/" element={<Sidebar sideBarList={businessSideBarList} />}>
                        <Route path='/dashboard' element={<DashBoard />} />
                    </Route>

                    <Route path="/admin" element={<Sidebar sideBarList={adminSideBarList} />}>
                        <Route path="users" element={<User />} />
                        <Route path='test' element={<Test />} />
                    </Route>
                    
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default App;
