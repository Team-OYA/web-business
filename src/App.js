import { BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./pages/main";
import Login from "./pages/common/login";
import Signup from "./pages/common/signup";

import DashBoard from "./pages/business/dashboard";

import User from "./pages/administrator/user";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>  
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/admin/users' element={<User/>}/>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
