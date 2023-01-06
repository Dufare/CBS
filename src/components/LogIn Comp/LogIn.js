import React,{useState} from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./LogIn.css";
import taxi2 from "../../assets/taxi 2.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"; 
import {auth} from "../../firebaseconfig/firebase"


const LogIn = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    
    "password": "",
    
    "email": "",
  })
  
  //error message
  // const [errorMsg , setErrorMsg]= useState("")
  


  // const handleChange = (e) => {
  //   setUser({...user,[e.target.name]:e.target.value})
  // }
  // const handleSubmit=()=>{
  //   if(!user.userName || !user.password )
  //   {
  //     setErrorMsg("Please fill all detials to LogIn")
  //     return;
  //   }
  //   setErrorMsg("");
  //   signInWithEmailAndPassword(auth,user.email,user.password)
  //   .then(res=>{
  //     navigate("/Home");
  //   }).catch((err)=>console.log("Error",err))
  // }


  
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
                      placeholder="Email"
                      value={user.email}
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
                    />
                  </div>
                  <div class="mb-1 error-msg "> 
                    <p>{errorMsg}</p>
                  </div>
                  <div class="mb-1 my-2">
                    <button type="button" className="btn btn-outline-primary" onClick={handleSubmit()}>
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
