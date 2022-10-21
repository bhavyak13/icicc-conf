import React from "react";
import style from "../header.module.css";

const Footer=()=>{
  const linkedIn="https://www.linkedin.com/in/icicc-conf-31a3b6151/";
  const email="mailto:icicc.ui@gmail.com";
  const facebook="https://www.facebook.com/profile.php?id=100022446397656";


  return(
    <div className={style.bg}>
    <div className={style.flex}>
    <div>

    <div>
    <h3>CONTACT DETAILS</h3>
    <p> <img src={require('./images/email.png')} className={style.logo}/>icicc.ui@gmail.com</p>
    </div>
    <br />
    <div>

    <h3>SOCIAL MEDIA</h3>
    <a href={email} className={style.links} target="_blank"><img src={require('./images/email.png')} className={style.logo} /> </a>
    <a href={facebook} className={style.links} target="_blank"><img src={require('./images/facebook.png')} className={style.logo}></img></a>
    <a href={linkedIn} className={style.links} target="_blank"><img src={require('./images/linkedin.webp')} className={style.logo}></img></a>
    </div>

    </div>
    <div>
    <h3>Quick Links</h3>
    <a>Call for Papers</a> <br />
    <a>Important Dates</a> <br />
    <a>Conference Venue</a> <br />
    <a>Downloads</a><br />
    <a className={style.links} style={{color:"white"}}href="https://easychair.org/conferences/?conf=icicc2023">Easychair Submission</a><br />
    </div>    
  </div>
  <hr style={{borderTop:"3px solid #ffffff"}} />
  <p>Copyright © International Conference on Innovative Computing and Communication | All Rights Reserved | 
  <br />Site By: Amith Harish,Bhavya Kawatra</p>
    </div>
  );
}

export default Footer;
