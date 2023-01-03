import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PrefRide from "./components/PrefRide/PrefRide";
import MapRide from "./components/MapRide"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/PrefRide" element={<PrefRide />}></Route>
        <Route exact path="/MapRide" element={<MapRide />}></Route>
      </Routes>
    </>
  );
}

export default App;
