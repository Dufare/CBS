import React from "react";
import "./DriverHome.css";

const DriverHome = () => {
  return (
    <div className="conatiner">
      <div className="conatiner main-conatiner ">
        <div className="card req-card">
          <table className="table">
            <thead className="driver-table-thread">
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col"> Action</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody className="driver-table-thread">
              <tr>
                <th scope="row">Jayesh Dufare</th>
                <td>
                  
                  <button type="button" class="btn btn-outline-warning btn-sm">Pick Ride</button>
                </td>
                <td><button type="button" class="btn btn-outline-danger btn-sm">Cancel Ride</button></td>
                <td>@mdo</td>
              </tr>
              <tr>
              <th scope="row">Jayesh Dufare</th>
                <td>
                  
                  <button type="button" class="btn btn-outline-warning btn-sm">Pick Ride</button>
                </td>
                <td><button type="button" class="btn btn-outline-danger btn-sm">Cancel Ride</button></td>
                <td>@mdo</td>
              </tr>
              <tr>
              <th scope="row">Jayesh Dufare</th>
                <td>
                  
                  <button type="button" class="btn btn-outline-warning btn-sm">Pick Ride</button>
                </td>
                <td><button type="button" class="btn btn-outline-danger btn-sm">Cancel Ride</button></td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="conatiner history-cont">
        <h4>History</h4>
       
        <div class="container my-3 total-grid">
  <div class="row">
    <div class="col">
    Total Rides Completed :3
    </div>
    <div class="col">
      Total Rides Rejected :4
    </div>
    <div class="col">
    Total Amount : 1500
    </div>
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
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Time & Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Ride Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">jayesh Dufare</th>
      <td>Bhawarkuwa</td>
      <td>Navlakha</td>
      <td>{Date()}</td>
      <td> 500 Rs</td>
      <td><button type="button" className="btn btn-outline-success btn-sm disabled">
                    Ride Completed
                  </button></td>
      
    </tr>
    <tr>
    <th scope="row">jayesh Dufare</th>
      <td>Bhawarkuwa</td>
      <td>Navlakha</td>
      <td>{Date()}</td>
      <td> 500 Rs</td>
      <td><button type="button" className="btn btn-outline-success btn-sm disabled">
                    Ride Completed
                  </button></td>
    </tr>
    <tr>
    <th scope="row">jayesh Dufare</th>
      <td>Bhawarkuwa</td>
      <td>Navlakha</td>
      <td>{Date()}</td>
      <td> 500 Rs</td>
      <td><button type="button" className="btn btn-outline-success btn-sm disabled">
                    Ride Completed
                  </button></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default DriverHome;
