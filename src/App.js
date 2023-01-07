import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AdminHome from "./Admin Components/AdminHome";
import LogIn from "./components/LogIn Comp/LogIn";
import Register from "./components/Reg Comp/Register";
import DriverHome from "./Driver Components/DriverHome";

import UserHome from "./components/UserHome";




function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
      <Route exact path="/LogIn" element={<LogIn />}></Route>
      <Route exact path="/Register" element={<Register />}></Route>
       
        
        <Route exact path="/AdminHome" element={<AdminHome />}></Route>
        <Route exact path="/DriverHome" element={<DriverHome />}></Route>
        
        <Route exact path="/UserHome" element={<UserHome />}></Route>
      </Routes>
    </>
  );
}

export default App;
