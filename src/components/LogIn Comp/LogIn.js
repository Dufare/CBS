import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./LogIn.css";
import taxi2 from "../../assets/taxi 2.png";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="Log-in-conatiner">
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img src={taxi2} class="img-fluid" alt="Phone image" />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className="container">
              <div className="card log-card">
                <div className="inner_card">
                  <div className="mb-1">
                    <input
                      type="text"
                      className="form-control input-field"
                      id="formGroupExampleInput"
                      placeholder="UserName"
                    />
                  </div>
                  <div class="mb-1">
                    <input
                      type="text"
                      className="form-control my-4 input-field"
                      id="formGroupExampleInput2"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-1">
                    <button type="button" className="btn btn-outline-primary">
                      Log In
                    </button>
                  </div>

                  <div className="mb-1">
                    
                    <Link
                      to="/Register"
                      className="cursor-pointer text-green-600 hover:text-green-800"
                    >
                      <div class="mb-1">
                        <a className="newacc">Create New Account</a>
                      </div>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LogIn;
