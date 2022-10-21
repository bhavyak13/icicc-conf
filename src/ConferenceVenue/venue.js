import React from "react";
import style from "../header.module.css";
import Date from "../Date";

const ConferenceVenue=()=>{
  return(
  <div>
  <h2 class={style.abtHeader}>We are located at...</h2>
  <hr />
  <div className={style.flex}>
  <img src={require('./images/venue.png')} className={style.venueImage}></img>
  <Date style={{margintTop:"-50px"}}/>
  </div>
  <h5 style={{padding:"10px"}}>Address:</h5>
<p style={{fontWeight:"500",padding:"10px"}}>Shaheed Sukhdev College Of Business Studies(University Of Delhi)<br />
Dr. K.N. Katju Marg Rohini Sector 16,<br />
PSP Area IV, New Delhi,<br />
Delhi 110089<br />
INDIA<br />
Email: icicc.ui@gmail.com<br />
</p>




  </div>
);
};

export default ConferenceVenue;
