import React,{useState,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-router-dom';
import {  Input } from 'reactstrap';
import fromTo from "./fromTo.module.css"
import { FaHome } from "react-icons/fa";


const FromTo = () => {
  const [success, setSuccess] = useState(false);
  const scollToRef = useRef();
  return (
    <>
    <Card className={fromTo.card}>
    
    <Card.Body>
    
     <div className='container d-flex mx-5 '>
      
      <div className="mx-3 col-md-5">
      <Input className='input_box' type="email" name="email" id="exampleEmail" placeholder="Current Location" />
     </div>
     <div className="mx-3 col-md-5">
     <Input className='input_box' type="email" name="email" id="exampleEmail" placeholder="Destination Location" />
     </div>
     </div>
     <Button className= {fromTo.marginRight14+" my-3 col-md-2 float-end"} onClick={() => (setSuccess(true)) (scollToRef.current.scrollIntoView())} variant="outline-success">Next</Button>{' '}
     
    
    </Card.Body> 
    
  </Card>

  {success && <div className='conatiner box-prefride'>
   <div className='pref-ride-text'><h3>Recomanded For You</h3></div> 
  <div className=" pref_ride_box container mx-5 my-5" ref={scollToRef}>
    <div className="row">
        <div className="col-md-8">
            <div className="people-nearby">
              
              <div className="nearby-user">
                <div className="row">
                  <div className="col-md-2 col-sm-2 mx-4">
                    <img src="https://www.pngmart.com/files/5/Auto-Rickshaw-PNG-File.png" alt="user" className="profile-photo-lg"/>
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
                    <img src="https://freepngimg.com/thumb/car/6-2-car-png-file-thumb.png" alt="user" className="profile-photo-lg"/>
                  </div>
                  <div className="ride_details col-md-7 col-sm-7">
                  <h5>Mini  </h5>
                    <p className="text-muted">Get autos at your doorstep</p>
                  </div>
                 
                  
                </div>
              </div>
              <div className="nearby-user">
                <div className="row">
                  <div className="col-md-2 col-sm-2 mx-4">
                    <img src="https://freepngimg.com/thumb/motorcycle/1-moto-png-image-motorcycle-png-picture-download-thumb.png" alt="user" className="profile-photo-lg"/>
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
    
    </div>}
  </>
  
  )
}

export default FromTo
