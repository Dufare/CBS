import React from "react";
import {Link} from "react-router-dom"
import logo from "../assets/taxi-26010.png";
import LogIn from "./LogIn Comp/LogIn";


const Navbar = () => {
  return (
    
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-main fixed-top">
          <ul className="navbar-nav mx-2">
            

            <li className="nav-item active mx-2">
              <Link to="/" className="nav-link">
                <strong> CBS</strong>
              </Link>
            </li>

            <li className="nav-item active mx-2">
              <Link to="/UserHome" className="nav-link">
                HOME
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/AdminHome" className="nav-link" href="#about">
                ABOUT US
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/profileView" className="nav-link">
                CONTACT
              </Link>
            </li>

           
          </ul>
          <div class="collapse navbar-collapse mx-4" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" ><i class="bi bi-bell"></i></a></li>
                        <li class="nav-item"><a class="nav-link"  data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="bi bi-person" ></i> </a></li>
                        
                    </ul>
                </div>
        </nav>
        <LogIn/>
       
    </div>
  );
};

export default Navbar;
