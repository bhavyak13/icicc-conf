import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from "../Date";

const IndExp=()=>{


return(
    <div>
         <h2 class={style.abtHeader}>Industry Experts</h2>
        <hr />
        <div className={style.flex}>
        <Date style={{float:"right"}}/>
        </div>
    </div>
)

}
export default IndExp;