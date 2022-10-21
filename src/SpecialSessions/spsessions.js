import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";


const spdata = [
  {
      anchor: require("./SS-001.pdf"),
      title: "Emerging Intelligent Computing Techniques and their Applications (EICTA)",
      organisers: [
          "Dr. Nitish Pathak, New Delhi, India",
          "Dr. Neelam Sharma, New Delhi, India",
          
      ],
      spname: "Ss 001.pdf",
  },
  {
      anchor: require("./SS-002.pdf"),
      title:
          "SS_02: Recent Trends in Machine Learning and Information System",
      organisers: [
          "Dr. Abhishek Kumar Mishra, Moradabad, India ",
          "Dr. Rakes Kumar Yadav, Lucknow, India"
      ],
      spname: "Ss 002.pdf",
  },
  {
      anchor: require("./SS-003.pdf"),
      title: "SS_03: Recent Advancement in Integration of Renewable Energy to the Grids: Techniques, Challenges, Applications",
      organisers: ["Abhishek Vishnoi, Kanpur, India",
                   "Vikas Verma, Delhi, India"],
      spname: "Ss 003.pdf",
  },
  
];

const SpecialSessions=()=>{
  return(
  <div>
  <h2 class={style.abtHeader}>Special Sessions</h2>
  <hr />
  <div className={style.flex}>
        <div className={style.spCont}>
            {spdata.map(sp=>{
                return(
                    <Alert 
                    className={style.spMem}>
                    <b>Link</b><br />
                    <a href={sp.anchor} style={{textDecoration:"none",color:"white"}}>{sp.title}</a> <br /><br />
                    <b>Organisers</b><br />
                    <p style={{width:"300px",fontSize:"14px"}}>
                    {sp.organisers.map(org=>{
                        return (                            
                                <li>{org}</li>                           
                        );
                    }            
                    
                    )}                                     

                    </p>
                    <b>Listing</b><br></br>
                    <a href={sp.anchor} style={{textDecoration:"none",color:"white"}}>{sp.spname}</a>
                    </Alert>
                );
            }) 
            }
        </div>
  </div>
  </div>

 
);
}

export default SpecialSessions;
