import { BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';

import Main from "./pages/main";
import Login from "./pages/common/login";
import Signup from "./pages/common/signup";
import DashBoard from "./pages/business/dashboard";
import User from "./pages/administrator/user";
import Test from "./pages/administrator/test";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/dashboard' element={<DashBoard/>}/>
                    <Route path='/admin/users' element={<User/>}/>
                    <Route path='/test' element={<Test/>}/>
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default App;
