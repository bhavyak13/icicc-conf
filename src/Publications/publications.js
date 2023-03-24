import React from "react";
import style from "../header.module.css";
import Date from "../Date";


const pubdata = [
    {
        anchor: require("./Images/phy_comm.jpg"),
        title: "Physical Communication, Elsevier (SCIE indexed) IF 2.37",
    },
    {
        anchor: require("./Images/2.jpg"),
        title:
            "Computer & Electrical Engineering, Elsevier (SCIE indexed) IF 4.15",
        
    },
    {
        anchor: require("./Images/1.jpg"),
        title: "Expert Systems, Wiley (SCIE indexed) IF 2.81",
        
    },    
    {
        anchor: require("./Images/3.jpg"),
        title: "Intelligent Decision Technologies (Indexed by SCOPUS & ESCI)",
    },
   
    {
        anchor: require("./Images/cmes.jpeg"),
        title: "Computer Modeling in Engineering & Sciences (SCIE Indexed IF 2.0)",
    },
    {
        anchor: require("./Images/jmm_cover.jpg"),
        title: "Journal of Mobile Multimedia(River)(Scopus and ESCI)",
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
        <p>All the accepted papers of ICICC - 2024 will be published as proceedings of ICICC - 2024 indexed by Scopus, Ei, WoS, and other reputed databases.
High-quality selected extended conference papers will be invited to submit for publication in the special issues.
</p>
        
        <div className={style.pubCont}>
        
            {pubdata.map(pub=>{
                return(
                    <ul
                    className={style.pubMem}>
                    <li>
                    
                    <img src={pub.anchor} style={{height:"250px",width:"175px"}} alt=""></img>
                    <br />
                    
                    <p style={{width:"175px",fontWeight:"500",fontSize:15}}>{pub.title}</p>
                    </li>
                    </ul>
                );
            }) 
            }
        </div>
        <h3 style={{textAlign:"center"}}>INDEXING</h3><br />
        <div className={style.pubCont}>
            <img src={require("./Images/Indexing/img01.png")} alt="logo"></img>
            <img src={require("./Images/Indexing/img02.jpg")} alt="logo"></img>
            <img src={require("./Images/Indexing/img03.jpg")} alt="logo"></img>
            <img src={require("./Images/Indexing/img04.png")} alt="logo"></img>
            <img src={require("./Images/Indexing/img05.png")} alt="logo"></img>
            <img src={require("./Images/Indexing/img06.png")} alt="logo"></img>
            <img src={require("./Images/Indexing/img07.png")} alt="logo"></img>
            <img src={require("./Images/Indexing/img08.png")} alt="logo"></img>
            <img src={require("./Images/Indexing/img09.png")} alt="logo"></img>
            
        </div>
        </div>
        <Date style={{float:"right"}}/>
        </div>
    </div>
)

}
export default Publications;