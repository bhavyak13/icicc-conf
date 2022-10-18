import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";


const spdata = [
  {
      anchor: require("./SS-001.pdf"),
      title: "SS_01: Privacy, Trust and Reputation Management in Internet of Vehicles (IoV)",
      organisers: [
          "Dr. Mohammad Ayoub Khan, University of Bisha, Saudi Arabia",
          "Prof. Qiang Ni, Lancaster University, Lancaster, U.K",
          "Abdullah Alharthi, Lancaster University, Lancaster, U.K",
      ],
      spname: "Ss 001.pdf",
  },
  {
      anchor: require("./SS-002.pdf"),
      title:
          "SS_02: Advances in Computational Intelligence for Intelligent Systems",
      organisers: [
          "Dr. Parul Yadav, Institute of Engineering and Technology, Lucknow, India",
      ],
      spname: "Ss 002.pdf",
  },
  {
      anchor: require("./SS-003.pdf"),
      title: "SS_03: Applications of Machine Learning and Deep Learning Methods in Real Life Problems",
      organisers: ["Syed Nisar Hussain Bukhari, National Institute of Electronics and Information Technology (NIELIT) J&K Govt. of India, India"],
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
                    <p>{sp.spname}</p>
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
