import React from 'react'

const PrefRide = () => {
  return (
    <div className=" pref_ride_box container mx-5 my-5">
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
  )
}

export default PrefRide
