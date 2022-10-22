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
    <a href="http://icicc-conf.com/call_for_papers" className={style.links} style={{color:"white"}}>Call for Papers</a> <br />
    <a href="http://icicc-conf.com/" className={style.links} style={{color:"white"}}>Important Dates</a> <br />
    <a href="http://icicc-conf.com/venue" className={style.links} style={{color:"white"}}>Conference Venue</a> <br />
    <a href="http://icicc-conf.com/downloads" className={style.links} style={{color:"white"}}>Downloads</a><br />
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
