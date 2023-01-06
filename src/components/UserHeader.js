import React from "react";
import cab1 from "../assets/cab1.jpg"

const UserHeader = () => {
  return (
    <div className="conatiner">
      <div class="w3-content w3-section" style="max-width:500px">
          <img src={cab1} class="img-fluid" alt="Phone image" />
        {/* <img className="mySlides" src="img_ny.jpg" style="width:100%" />
        <img className="mySlides" src="img_chicago.jpg" style="width:100%" /> */}
      </div>
    </div>
  );
};

export default UserHeader;
