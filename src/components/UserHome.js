import React,{useState,useRef} from "react";
import cab1 from "../assets/cab1.png";
import cab2 from "../assets/cab2.png";
import cab3 from "../assets/cab3.png";
import cab4 from "../assets/cab4.png";
import cab5 from "../assets/bodypic.jpg";
import cab6 from "../assets/mist.jpg";
import cab7 from "../assets/mount.jpg";
import { rideRequest } from "../../src/Redux/Action/UserActions";
import { useDispatch } from "react-redux";


const UserHome = () => {
  

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
    ride:"",
    date_time: date,
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
      ride:"",
      date_time: "",
      status: "",
      bookingid: "",
      ride_charge : "",
    });
    dispatch(rideRequest(ride_req));
  }
  return (
    <>
      <div
        id="carouselExampleCaptions"
        
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <div className="conatiner">
            <div>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
          </div>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cab1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>MOVING PEOPLE AND THE WORLD</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cab2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cab4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cab3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* -------------------------------------------MODAL------------- */}
  
      <div>
        <div
          className="modal fade"
          id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content main-card">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 "  id="exampleModalLabel">
                  BOOK YOUR RIDE
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body ">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <div className="form-floating mb-2 my-3 ">
                        <input
                          type="email"
                          className="form-control input_box"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={ride_req.from}
                          name="from"
                          onChange={(e) => handleChange(e)}
                        />
                        <label for="floatingInput ">FROM LOCATION</label>
                      </div>
                    </div>

                    <div className="col-sm">
                      {" "}
                      <div className="modal-body">
                        <div className="form-floating mb-2">
                          <input
                            type="email"
                            className="form-control input_box "
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={ride_req.to}
                            name="to"
                  onChange={(e) => handleChange(e)}
                          />
                          <label for="floatingInput input_box">
                            DESTINATION
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row mx-5">
                      <div className="col-sm-3">
                      <div className="card ride-card">
                          <div className="card-body mx-3">
                            <a href="#" className="btn btn-outline-light" value={ride_req.ride} onClick={(e) => setRideReq(e)}>
                              <div className="col-md-2 col-sm-2 mx-4">
                                <img
                                  src="https://freepngimg.com/thumb/car/6-2-car-png-file-thumb.png"
                                  alt="user"
                                  className="profile-photo-lg"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                   <div className="col-sm-3">
                        <div className="card ride-card">
                          <div className="card-body mx-3">
                            <a href="#" className="btn btn-outline-light">
                              <div className="col-md-2 col-sm-2 mx-4">
                                <img
                                  src="https://www.pngmart.com/files/5/Auto-Rickshaw-PNG-File.png"
                                  alt="user"
                                  className="profile-photo-lg"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="card ride-card">
                          <div className="card-body mx-3">
                            <a href="#" className="btn btn-outline-light">
                              <div className="col-md-2 col-sm-2 mx-4">
                                <img
                                  src="https://freepngimg.com/thumb/motorcycle/1-moto-png-image-motorcycle-png-picture-download-thumb.png"
                                  alt="user"
                                  className="profile-photo-lg"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="  container  d-flex flex-row-reverse  button-grp">
                <button
                  type="button"
                  className="btn btn-secondary ms-1 p-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary  "onClick= {handleSubmit}>
                  Choose Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //--------------------------- */}

      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <a
              className="btn btn-outline-warning my-3"
              type="button"
              
              
            >
              BOOK YOUR RIDE
            </a>
            <h1 className="mx-auto my-1 text-uppercase"> Safety For All</h1>
            <h5 className="text-white-50 mx-auto mt-2 mb-5">
              At CBS , the well-being of our customer is above everything else.
            </h5>
          </div>
        </div>
      </div>

      <section className="projects-section second-cont" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-7 col-lg-7">
              <img className="img-fluid  mb-1 mb-lg-3 " src={cab5} alt="..." />
            </div>
            <div className="col-xl-3 col-lg-5 cont_body">
              <div className="featured-text text-center text-lg-left  text-cont">
                <h4>Shoreline</h4>
                <p className=" mb-0 text-cont">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download
                  it, customize it, and publish your website!
                </p>
              </div>
            </div>
          </div>

          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img className="img-fluid" src={cab6} alt="..." />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">
                      Making innovations since 2011
                    </h4>
                    <p className="mb-0 text-white-50">
                      We constantly experiment to come up with industry-first
                      features for our riders that eventually become a
                      norm.Easily plan a day out without having to worry about
                      conveyance with an hour-based package from Rental.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ms-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img className="img-fluid" src={cab7} alt="..." />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">
                      There's an CBS ride for everyone
                    </h4>
                    <p className="mb-0 text-white-50">
                      From Bikes and Autos to Prime Sedans and Prime SUVs, you
                      will find a ride in your budget at your convenience any
                      time. Book rides within the city with Daily, or take a
                      trip to your favourite destinations outside the city with
                      Outstation.
                    </p>
                    <hr className="d-none d-lg-block mb-0 me-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/*------------------- Footer-------------------------------- */}
      <div className="conatiner my-5">
        <section className="contact-section bg-black">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 my-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-0 h-50 my-5 footer-card">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0"><i class="bi bi-globe"></i></h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-light-50 ">205 Dyna Building, tOWER Chourah</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-0 h-50 my-5 footer-card">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0"><i class="bi bi-envelope"></i></h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-light-50"><a href="#!">cbs@bookride.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-0 h-50 my-5 footer-card">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0"><i class="bi bi-telephone"></i></h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-light-50">+91 (00) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center contact-footer">
                    <a className="mx-2" href="#!"><i class="bi bi-twitter"></i></a>
                    <a className="mx-2" href="#!"><i class="bi bi-facebook"></i></a>
                    <a className="mx-2" href="#!"><i class="bi bi-facebook"></i></a>
                </div>
            </div>
        </section>
        </div>
    </>
  );
};

export default UserHome;
