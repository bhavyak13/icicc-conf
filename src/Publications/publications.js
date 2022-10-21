import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from "../Date";


const pubdata = [
    {
        anchor: require("./Images/1.jpg"),
        title: "Expert Systems, Wiley (SCIE indexed IF 2.58)",
        
    },
    {
        anchor: require("./Images/2.jpg"),
        title:
            "Computer & Electrical Engineering, Elsevier (SCIE indexed IF 3.81)",
        
    },
    {
        anchor: require("./Images/3.jpg"),
        title: "Intelligent Decision Technologies, Indexed by SCOPUS & ESCI",
    },
    
  ];

const Publications=()=>{
return(
    <div>
         <h2 class={style.abtHeader}>Publications</h2>
        <hr />
        <div className={style.flex}>
        <div className={style.publications}>
        <h3 style={{textAlign:"center"}}>PUBLICATION- PROCEEDINGS</h3><br />
        <p>All the accepted papers of ICCCN-2022 will be published as a proceedings of          ICCCN-2022 indexed by Scopus, Ei, WoS, and other reputed databases.<br></br>
        High-quality selected extended papers of the conference will be invited to submit for publication in the special issues of the following journals :</p>
        
        <div className={style.pubCont}>
        
            {pubdata.map(pub=>{
                return(
                    <div
                    className={style.pubMem}>
                    
                    <img src={pub.anchor} style={{height:"250px",width:"175px"}}></img>
                    <br />
                    
                    <p style={{width:"175px",fontWeight:"500",fontSize:15}}>{pub.title}</p>
                    </div>
                );
            }) 
            }
        </div>
        <h3 style={{textAlign:"center"}}>INDEXING</h3><br />
        <div className={style.pubCont}>
            <img src={require("./Images/Indexing/img01.png")}></img>
            <img src={require("./Images/Indexing/img02.jpg")}></img>
            <img src={require("./Images/Indexing/img03.jpg")}></img>
            <img src={require("./Images/Indexing/img04.png")}></img>
            <img src={require("./Images/Indexing/img05.png")}></img>
            <img src={require("./Images/Indexing/img06.png")}></img>
            <img src={require("./Images/Indexing/img07.png")}></img>
            <img src={require("./Images/Indexing/img08.png")}></img>
            <img src={require("./Images/Indexing/img09.png")}></img>
            
        </div>
        </div>
        <Date style={{float:"right"}}/>
        </div>
    </div>
)

}
export default Publications;