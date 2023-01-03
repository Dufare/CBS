import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mx-2">
            <li className="nav-item">
              {/* <img
                alt="logo"
                src={logo1}
                width={50}
                height={45}
                className="rounded-circle"
              /> */}
              <p>Home</p>
            </li>

            <li className="nav-item active mx-2">
              <Link to="/" className="nav-link">
                <strong> CBS</strong>
              </Link>
            </li>

            <li className="nav-item active mx-2">
              <Link to="/Home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/update" className="nav-link">
                Update
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/profileView" className="nav-link">
                Profile View
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/signup" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
