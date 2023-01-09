import React, { useEffect, useState } from "react";
import "./DriverHome.css";

const RideRequest = () => {
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

  return (
    <div>
      <div className="conatiner main-conatiner ">
        <div className="card req-card">
          <table className="table">
            <thead className="driver-table-thread">
              <tr>
                <th scope="col">Booking Id</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Ride Date</th>
                <th scope="col">Ride Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody className="driver-table-thread">
              {data.map((post) => (
                <tr>
                  <th scope="row">{post.bookingid}</th>
                  <td>{post.from}</td>
                  <td>{post.to}</td>
                  <td>{post.date_time}</td>
                  <td>{post.ridedate}</td>
                  <td>{post.ridetime}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-sm"
                      //onClick={getRides(post.id)}
                    >
                      Pick Ride
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RideRequest;
