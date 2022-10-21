import React from "react";
import Date from "../Date";
import style from "../header.module.css";
import ImageSlider from "./imageSlider/slider";
import { images20 } from "./imageSlider/images";

const Icicc20=()=>{
    const links=[{
        title:"Volume 1",
        anchor:"https://www.springer.com/gp/book/9789811551123",
        val:"https://www.springer.com/gp/book/9789811551123"
    },
    {
        title:"Volume 2",
        anchor:require("https://www.springer.com/gp/book/9789811551475"),
        val:"https://www.springer.com/gp/book/9789811551475"

    },
    ]
  return(
  <div>
  <h2 class={style.abtHeader}>ICICC 2020</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <p style={{fontSize:15,letterSpacing:1}}>Third version of International Conference in innovative Computing and Communication (ICICC-2020) was organized at Shaheed Sukhdev College of Business Studies in association with National institute of Technology Patna and University of Valladolid, Spain on 21-23 rd February 2020 at New Delhi, India. ICICC-2020 received 803 papers from approximately 3212 authors and a total of 196 papers were accepted with an acceptance ratio of 24%. All accepted papers were published in Springer’s Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 544 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2020 received papers from 29 countries.</p><br />
<h3>LINK OF PROCEEDINGS OF ICICC 2020</h3><br />
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
<ImageSlider images={images20}/>
  </div>
  <Date />

</div>


  </div>
);
};

export default Icicc20;
