import React from "react";
import style from "./header.module.css";

const Date=()=>{
  return(
    <div >
  <div className={style.marContainer} >
<h3>Important Dates</h3>
  <marquee  direction="up" className={style.marquee} style={{width:"30vw"}} >

  <p><b>Paper Submission Deadline:</b><br />
  <span className={style.colorDate}>September 15th, 2024</span></p>
  <hr />
<p>
<b>Notification of first review:</b><br />
<span className={style.colorDate}>September 25th, 2024</span>
<hr />
</p>
<p>
<b>Submission of revised manuscript</b><br />
<span className={style.colorDate}>October 10th, 2024</span>
<hr />
</p>
<p>
<b>Notification of Acceptance / Rejection</b><br />
<span className={style.colorDate}>October 25th, 2024</span>
<hr />
</p>
<p>
<b>Final manuscript due</b><br />
<span className={style.colorDate}>October 30th, 2024</span>
<hr />
</p>
<p>
<b>Registration Deadline</b><br />
<span className={style.colorDate}>November 30th, 2024</span>
<hr />
</p>
<p>
{/* <b>Final Paper Due</b><br />
<span className={style.colorDate}>January 30th, 2023</span> */}
<hr />
</p>

  </marquee>
  
  </div>
  </div>

 
);
};

export default Date;
