import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-router-dom";
import { Input } from "reactstrap";
import fromTo from "./fromTo.module.css";
import { FaHome } from "react-icons/fa";
import { rideRequest } from "../../Redux/Action/UserActions";
import { useDispatch } from "react-redux";

const FromTo = () => {
  const [success, setSuccess] = useState(false);
  const scollToRef = useRef();

  //DateTime 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  //Random Booking Id Generation
  let booking_id = Math.floor((Math.random() * 180546) + 1);
  //Cost Handling for 
  let distance = Math.floor((Math.random() * 50) + 1);
  let rate = distance * 10 ;
  
  

  const [ride_req, setRideReq] = useState({
    id: "",
    from: "",
    to: "",
    "date_time": date,
    status: "Pending",
    bookingid: booking_id,
    ride_charge : rate ,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setRideReq({ ...ride_req, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setRideReq({
      id: "",
      from: "",
      to: "",
      "date_time": "",
      status: "",
      bookingid: "",
      ride_charge : "",
    });
    dispatch(rideRequest(ride_req));
  //  (setSuccess(true)) 
  //   {scollToRef.current.scrollIntoView()}
  }
    return (
      <>
        <Card className={fromTo.card}>
          <Card.Body>
            <div className="container d-flex mx-5 ">
              <div className="mx-3 col-md-5">
                <Input
                  className="input_box"
                  type="text"
                  name="from"
                  id="exampleEmail"
                  placeholder="Current Location"
                  value={ride_req.from}
                  //name="from"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mx-3 col-md-5">
                <Input
                  className="input_box"
                  type="text"
                  name="to"
                  id="exampleEmail"
                  placeholder="Destination Location"
                  value={ride_req.to}
                  //name="to"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <Button
              className={fromTo.marginRight14 + " my-3 col-md-2 float-end"}
              onClick= {handleSubmit}
              // onClick={() =>
              //   ({ handleSubmit }(setSuccess(true))(
              //     scollToRef.current.scrollIntoView()
              //   ))
              // }
              variant="outline-success"
            >
              Next
            </Button>{" "}
          </Card.Body>
        </Card>

        {success && (
          <div className="conatiner box-prefride">
            <div className="pref-ride-text">
              <h3>Recomanded For You</h3>
            </div>
            <div
              className=" pref_ride_box container mx-5 my-5"
              ref={scollToRef}
            >
              <div className="row">
                <div className="col-md-8">
                  <div className="people-nearby">
                    <div className="nearby-user">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 mx-4">
                          <img
                            src="https://www.pngmart.com/files/5/Auto-Rickshaw-PNG-File.png"
                            alt="user"
                            className="profile-photo-lg"
                          />
                        </div>
                        <div className=" ride_details col-md-7 col-sm-7">
                          <h5>Auto</h5>
                          <p className="text-muted">Mini, Prime Sedan</p>
                        </div>
                      </div>
                    </div>
                    <div className="nearby-user">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 mx-4">
                          <img
                            src="https://freepngimg.com/thumb/car/6-2-car-png-file-thumb.png"
                            alt="user"
                            className="profile-photo-lg"
                          />
                        </div>
                        <div className="ride_details col-md-7 col-sm-7">
                          <h5>Mini </h5>
                          <p className="text-muted">
                            Get autos at your doorstep
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="nearby-user">
                      <div className="row">
                        <div className="col-md-2 col-sm-2 mx-4">
                          <img
                            src="https://freepngimg.com/thumb/motorcycle/1-moto-png-image-motorcycle-png-picture-download-thumb.png"
                            alt="user"
                            className="profile-photo-lg"
                          />
                        </div>
                        <div className=" ride_details col-md-7 col-sm-7">
                          <h5>Bike</h5>
                          <p className="text-muted">Discount applied on fare</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  
};

export default FromTo;
