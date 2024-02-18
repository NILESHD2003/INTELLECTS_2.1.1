import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />

            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
