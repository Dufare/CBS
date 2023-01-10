import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./UserPayment.css"
import Rupay from "../assets/Rupay.png"
import MasterVisa from "../assets/MasterVisa.png"
import styles from "./UserPayment.css"



const UserPayment = () => {
    const data = useSelector(state=> state.rootReducer.userReducer.ride_req)
   console.log(data)

    let carNumber = Math.floor(Math.random() * 10000 + 1); 

  return (
    <div className='container main-div-u my-5' >
        <div className="container main_ucont">
        <div className="row m-0">
            <div className="col-lg-7 pb-5 pe-lg-5">
                <div className="row">
                    <div className="col-12 p-5">
                        <img src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-upcoming-new-honda-cars-india-new-honda-3.png"
                            alt=""/>
                    </div>
                    <div className="row m-0 bg-light">
                        <div className="col-md-4 col-6 ps-30 pe-0 my-4">
                            <p className="text-muted">From Location</p>
                            <p className="h5"><span className="ps-1">kk</span></p>
                        </div>
                        <div className="col-md-4 col-6  ps-30 my-4">
                            <p className="text-muted">To Location</p>
                            <p className="h5 m-0">Manual</p>
                        </div>
                        <div className="col-md-4 col-6 ps-30 my-4">
                            <p className="text-muted">Drive unit</p>
                            <p className="h5 m-0">Front</p>
                        </div>
                        <div className="col-md-4 col-6 ps-30 my-4">
                            <p className="text-muted">Body</p>
                            <p className="h5 m-0">Coupe</p>
                        </div>
                        <div className="col-md-4 col-6 ps-30 my-4">
                            <p className="text-muted">Color</p>
                            <p className="h5 m-0">White</p>
                        </div>
                        <div className="col-md-4 col-6 ps-30 my-4">
                            <p className="text-muted">Car Number</p>
                            <p className="h5 m-0">{carNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 p-0 ps-lg-4">
                <div className="row m-0">
                    <div className="col-12 px-4">
                        <div className="d-flex align-items-end mt-4 mb-2">
                            <p className="h4 m-0"><span className="pe-1">ZAZ</span><span className="pe-1">966</span><span
                                    className="pe-1">B</span></p>
                            <p className="ps-3 textmuted">1L</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <p className="textmuted">Qty</p>
                            <p className="fs-14 fw-bold">1</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <p className="textmuted">Subtotal</p>
                            <p className="fs-14 fw-bold"><span className="fas fa-dollar-sign pe-1"></span>1,450</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <p className="textmuted">Shipping</p>
                            <p className="fs-14 fw-bold">Free</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <p className="textmuted">Promo code</p>
                            <p className="fs-14 fw-bold">-<span className="fas fa-dollar-sign px-1"></span>100</p>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <p className="textmuted fw-bold">Total</p>
                            <div className="d-flex align-text-top ">
                                <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span><span className="h4">1,350</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-0">
                        <div className="row bg-light m-0">
                            {/* <div className="col-12 px-4 my-4">
                                <p className="fw-bold">Payment detail</p>
                            </div>
                            <div className="col-12 px-4">
                                <div className="d-flex  mb-4">
                                    <span className="">
                                        <p className="text-muted">Card number</p>
                                        <input className="form-controll" type="text" 
                                            placeholder="XXX XXX XXX"/>
                                    </span>
                                    <div className=" w-100 d-flex flex-column align-items-end">
                                        <p className="text-muted">Expires</p>
                                        <input className="form-control2" type="text"  placeholder="MM/YYYY"/>
                                    </div>
                                </div>
                                <div className="d-flex mb-5">
                                    <span className="me-5">
                                        <p className="text-muted">Cardholder name</p>
                                        <input className="form-controll" type="text" 
                                            placeholder="Name"/>
                                    </span>
                                    <div className="w-100 d-flex flex-column align-items-end">
                                        <p className="text-muted">CVC</p>
                                        <input className="form-control3" type="text"  placeholder="XXX"/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row m-0">
                            <div className="col-12  mb-4 p-0">
                                <div className="btn btn-primaryy"data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={""}>Card Pay
                                <span className="fas fa-arrow-right ps-2"></span>
                                </div>
                            </div>
                            <div className="col-12  mb-4 p-0 my-3">
                                <div className="btn btn-primaryy" onClick={""}>UPI PAY
                                <span className="fas fa-arrow-right ps-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





   
     
    </div>
  )
}

export default UserPayment
