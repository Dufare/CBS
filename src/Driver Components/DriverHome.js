import React, { useEffect, useState } from "react";
import "./DriverHome.css";
import { getrideRequests } from "../Redux/Action/UserActions";

const DriverHome = () => {
  const [data, setData] = useState([]);


  //GET ALL
  const fetchRides = async () => {
    const data = await fetch(" http://localhost:5000/RideRequest");
    const parsedData = await data.json();
    setData(parsedData);    
  };
  
  useEffect(() => {
    fetchRides();
   

  }, []);

   //GET SINGLE RIDE
   const getRides = async(id) => {
   fetch(`http://localhost:5000/RideRequest/${id}`,{
       method :'GET'
   }).then(async (result)=>{
       await result.json().then((resp)=>{
        
        
        
        }
        )
        
    })
   
    
      
    
  };

  

   

  return (
    <div className="conatiner">

      {/* MODAL CODE
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  {data.map((post) => (
    <div class="modal-content">
      <div class="modal-header">
        
        <h5 class="modal-title" id="exampleModalLabel">{post.bookingid}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
       
    </div>
    ))}
  </div>
</div> */}


      {/* -------------------------------REQUEST TABLE--------------- */}

      <div className="conatiner main-conatiner ">
        <div className="card req-card">
          <table className="table">
            <thead className="driver-table-thread">
              <tr>
                <th scope="col">Customer Name </th>
                <th scope="col">Date</th>
                <th scope="col"> Action</th>
                <th scope="col">Last</th>
              </tr>
            </thead>
            <tbody className="driver-table-thread">
              {data.map((post) => (
                <tr>
                  <th scope="row">{post.from}</th>
                  <td>{post.date_time}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-sm"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                      
                      onClick={()=>getRides(post.id)}
                    >
                      Pick Ride
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                       onClick={()=>getRides(post.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Cancel Ride
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="conatiner history-cont">
        <h4>History</h4>

        <div class="container my-3 total-grid">
          <div class="row">
            <div class="col">Total Rides Completed :3</div>
            <div class="col">Total Rides Rejected :4</div>
            <div class="col">Total Amount : 1500</div>
          </div>
        </div>

        <input
          type="text"
          className="form-control input-field border-0 my-4"
          id="formGroupExampleInput"
          placeholder="Search"
        />
        <table className="table history-table ">
          <thead>
            
            <tr>
            
              <th scope="col">Customer Name</th>
              <th scope="col">Booking Id</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Time & Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Ride Status</th>
            </tr>
            
          </thead>
          <tbody>
          {data.map((post) => (
            <tr>
              <th scope="row">jayesh Dufare</th>
              <td>{post.bookingid}</td>
              <td>{post.from}</td>
              <td>{post.to}</td>
              <td>{post.date_time}</td>
              <td> {post.ride_charge}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm disabled"
                >
                  Ride Completed
                </button>
              </td>
            </tr>
            ))
          }
          
          </tbody>
        </table>
      </div>
    </div>
  );
        }

export default DriverHome;
