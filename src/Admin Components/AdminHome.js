import React from "react";
import "./AdminHome.css";
import UserMng from "./UserMng";

const AdminHome = () => {
  return (
    <>
    <div className="conatiner">
      <div className="side_nav card ">
        <div className="card-body">
          <h5>ADMIN DASHBOARD</h5>
          <div className="dash_item">
            <ul className="list-group list-group-flush rounded">
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                User Management
              </li>
              <li className="list-group-item">
                <i class="bi bi-car-front mx-2"></i>Driver Management
              </li>
              <li className="list-group-item">Cost Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   <UserMng/>
   </>
  );
};

export default AdminHome;
