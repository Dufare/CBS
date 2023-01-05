import React, { useEffect,useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "../LogIn Comp/LogIn.css";
import taxi2 from "../../assets/register taxi.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Action/UserActions";

const Register = () => {
  const [user,setUser] = useState({
    "id": "",
    "userName": "",
    "password": "",
    "mobile": "",
    "address": "",
    "email": "",
  })
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
    setUser({
      "id": "",
      "userName": "",
      "password": "",
      "mobile": "",
      "address": "",
      "email": "",
    })
    dispatch(registerUser(user))
  }
  return (
    <div className="Log-in-conatiner">
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
         

          <MDBCol col="4" md="6" className="coloumn-reg">
            <div className="container">
              <div className="card log-card">
                <div className="inner_card">
                  <div className="mb-1">
                    <input
                      type="text"
                      className="form-control input-field"
                      id="formGroupExampleInput"
                      placeholder="UserName"
                      value={user.userName}
                      name="userName"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div class="mb-1">
                    <input
                      type="text"
                      className="form-control my-4 input-field"
                      id="formGroupExampleInput2"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e)=>handleChange(e)}
                      name="password"
                    />
                  </div>

                  <div class="mb-1">
                    <input
                      type="text"
                      className="form-control my-4 input-field"
                      id="formGroupExampleInput2"
                      placeholder="Mobile"
                      value={user.mobile}
                      onChange={(e)=>handleChange(e)}
                      name="mobile"
                    />
                  </div>

                  <div class="mb-1">
                    <input
                      type="text"
                      className="form-control my-4 input-field"
                      id="formGroupExampleInput2"
                      placeholder="Address"
                      value={user.address}
                      onChange={(e)=>handleChange(e)}
                      name="address"
                    />
                  </div>

                  <div class="mb-1">
                    <input
                      type="text"
                      className="form-control my-4 input-field"
                      id="formGroupExampleInput2"
                      placeholder="Email"
                      value= {user.email}
                      onChange={(e)=>handleChange(e)}
                      name= "email"
                    />
                  </div>
                  <div class="mb-1">
                    <button type="button" className="btn btn-outline-primary" onClick={handleSubmit} >
                      Regiter
                    </button>
                  </div>
                 
                  <div className="mb-1">
                    
                    <Link
                      to="/LogIn"
                      className="cursor-pointer text-green-600 hover:text-green-800"
                    >
                      <div class="mb-1">
                        <a className="newacc">Already have an Account</a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="10" md="6">
            <img src={taxi2} class="img-fluid" alt="Phone image" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Register;
