import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./Components/SignUp";
import Otp from "./pages/Otp";
import Take_Info from "./pages/Take_Info";
import User_Info from "./pages/User_Info";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
            <Route path="/Otp" element={<Otp></Otp>}></Route>
            <Route path="/User_Info" element={<User_Info></User_Info>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/user/:id" element={<Blog></Blog>}></Route>
            <Route path="/Take_Info" element={<Take_Info></Take_Info>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
