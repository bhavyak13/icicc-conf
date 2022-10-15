import React from "react";
import style from "../header.module.css";
import Button from 'react-bootstrap/Button';
import Date from "../Date";

const Downloads=()=>{
  return(
  <div>
  <h2 class={style.abtHeader}>Downloads</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.dCont}>
  <div style={{width:"50vw"}}>
  <Button className={style.downloadBadges}>Manuscript Guidelines <img src={require('./docs/icon.png')} className={style.icon}></img> </Button>
  <Button variant="primary" className={style.downloadBadges}>Checklist  <img src={require('./docs/icon.png')} className={style.icon}></img> </Button> 
  <Button variant="primary" className={style.downloadBadges}>Special Session Proposal Template
  <img src={require('./docs/icon.png')} className={style.icon}></img></Button> 
  </div>

  <div style={{width:"50vw"}}> 
  <Button variant="primary" className={style.downloadBadges}>Icicc Brochure  <img src={require('./docs/icon.png')} className={style.icon}></img></Button> 
  <Button variant="primary" className={style.downloadBadges}>Sponsorship Proposal  <img src={require('./docs/icon.png')} className={style.icon}></img></Button> 
  <Button variant="primary" className={style.downloadBadges}>Special Session Proposal Template  <img src={require('./docs/icon.png')} className={style.icon}></img></Button>
  </div> 

  </div>
  <Date />
  </div>
</div>
 
);
};

export default Downloads;
