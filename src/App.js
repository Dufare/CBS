import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PrefRide from "./components/PrefRide/PrefRide";
import MapRide from "./components/MapRide"
import AdminHome from "./Admin Components/AdminHome";
import LogIn from "./components/LogIn Comp/LogIn";
import Register from "./components/Reg Comp/Register";
import DriverHome from "./Driver Components/DriverHome";




function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
      <Route exact path="/LogIn" element={<LogIn />}></Route>
      <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/PrefRide" element={<PrefRide />}></Route>
        <Route exact path="/MapRide" element={<MapRide />}></Route>
        <Route exact path="/AdminHome" element={<AdminHome />}></Route>
        <Route exact path="/DriverHome" element={<DriverHome />}></Route>
      </Routes>
    </>
  );
}

export default App;
