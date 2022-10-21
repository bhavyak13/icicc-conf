import React from "react";
import Date from "../Date";
import style from "../header.module.css";
import { images18 } from "./imageSlider/images";
import ImageSlider from "./imageSlider/slider";

const Icicc18=()=>{
    const links=[{
        title:"Volume 1",
        anchor:"https://www.springer.com/gp/book/9789811323232",
        val:"https://www.springer.com/gp/book/9789811323232"
    },
    {
        title:"Volume 2",
        anchor:require("https://www.springer.com/gp/book/9789811323539"),
        val:"https://www.springer.com/gp/book/9789811323539"

    },
    ]
  return(
  <div>
  <h2 class={style.abtHeader}>ICICC 2018</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <p style={{fontSize:15,letterSpacing:1}}>First International Conference on Innovative Computing and Communication (ICICC-2018) was organized at Guru Nanak Institute of Management, New Delhi, India on 5-6th May 2018. ICICC-2018 received 468 papers from approximately 1872 authors and a total of 92 papers were accepted with an acceptance ratio of 19%. All accepted papers were published in Springer’s Lecture Notes on Networks and Systems, an scopus indexed series. A total of 462 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2018 received papers from 20 countries and got lot of recommendations from the science community for the organization and the quality of papers.</p><br />
<h3>LINK OF PROCEEDINGS OF ICICC 2018</h3><br />
<div className={style.volumes}>
		<table class="table table-bordered table-hover" style={{textAlign:"left"}}>
            <tbody>
            {links.map((link)=>{
                return (
                <tr>
                    <td><b>{link.title}:</b></td>
                    <td><a href={link.anchor}>{link.val}</a></td>
                </tr>
                );
            })}
              
            </tbody>
          </table>
</div>
<ImageSlider images={images18}/>
  </div>
  
  <Date />

</div>


  </div>
);
};

export default Icicc18;
