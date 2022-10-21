import React from "react";
import Date from "../Date";
import style from "../header.module.css";
import { images19 } from "./imageSlider/images";
import ImageSlider from "./imageSlider/slider";

const Icicc19=()=>{
    const links=[{
        title:"Volume 1",
        anchor:"https://www.springer.com/gp/book/9789811512858",
        val:"https://www.springer.com/gp/book/9789811512858"
    },
    {
        title:"Volume 2",
        anchor:require("https://www.springer.com/gp/book/9789811503238"),
        val:"https://www.springer.com/gp/book/9789811503238"

    },
    ]
  return(
  <div>
  <h2 class={style.abtHeader}>ICICC 2019</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <p style={{fontSize:15,letterSpacing:1}}>Second version of International Conference in innovative Computing and Communication (ICICC-2019) was organized at VSB-Technical University of Ostrava, Czech Republic, Europe on 21-22nd March 2019 with a pre-conference symposium at New Delhi, India on 16th March 2019. ICICC-2019 received 552 papers from approximately 2208 authors and a total of 125 papers were accepted with an acceptance ratio of 22%. All accepted papers were published in Springer’s Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 524 participants attended the conference and pre-conference symposium including authors, keynotes, delegates, academicians, and industry experts. ICICC-2019 received papers from 25 countries.</p><br />
<h3>LINK OF PROCEEDINGS OF ICICC 2019</h3><br />
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
<ImageSlider images={images19}/>
  </div>
  <Date />

</div>


  </div>
);
};

export default Icicc19;
