import React from "react";
import Date from "../Date";
import style from "../header.module.css";
import ImageSlider from "./imageSlider/slider";
import {images21} from "./imageSlider/images";

const Icicc21=()=>{
    const links=[{
        title:"Volume 1",
        anchor:"https://www.springer.com/gp/book/9789811625930",
        val:"https://www.springer.com/gp/book/9789811625930"
    },
    {
        title:"Volume 2",
        anchor:require("https://www.springer.com/gp/book/9789811625961"),
        val:"https://www.springer.com/gp/book/9789811625961"

    },
    {
        title:"Volume 3",
        anchor:require("https://www.springer.com/gp/book/9789811630705"),
        val:"https://www.springer.com/gp/book/9789811630705"
    }
    ]
  return(
  <div>
  <h2 class={style.abtHeader}>ICICC 2021</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <p style={{fontSize:15,letterSpacing:1}}>Fourth version of International Conference in innovative Computing and Communication (ICICC-2021) was organized at Shaheed Sukhdev College of Business Studies in association with National institute of Technology Patna and University of Valladolid, Spain on 20-21 February 2021 at New Delhi, India. ICICC-2021 received 900 papers from approximately 3600 authors and a total of 210 papers were accepted with an acceptance ratio of 23%. All accepted papers were published in Springer’s Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 590 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2021 received papers from 28 countries. Due to unexpected COVID-19, ICICC-2021 was organized in virtual mode.</p><br />
<h3>LINK OF PROCEEDINGS OF ICICC 2021</h3><br />
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

<ImageSlider images={images21}/>
  </div>
  <Date />

</div>


  </div>
);
};

export default Icicc21;
