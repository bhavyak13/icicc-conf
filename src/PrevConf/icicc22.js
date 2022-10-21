import React from "react";
import Date from "../Date";
import style from "../header.module.css";

const Icicc22=()=>{
    const links=[{
        title:"Volume 1",
        anchor:"https://link.springer.com/book/9789811928222",
        val:"https://link.springer.com/book/9789811928222"
    },
    {
        title:"Volume 2",
        anchor:require("https://link.springer.com/book/9789811925368"),
        val:"https://link.springer.com/book/9789811925368"

    },
    {
        title:"Volume 3",
        anchor:require("https://link.springer.com/book/9789811936807"),
        val:"https://link.springer.com/book/9789811936807"
    }
    ]
  return(
  <div>
  <h2 class={style.abtHeader}>ICICC 2022</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <p style={{fontSize:15,letterSpacing:1}}>Fifth version of International Conference in innovative Computing and Communication (ICICC-2022) was organized at Shaheed Sukhdev College of Business Studies in association with National Institute of Technology Patna, University of Valladolid Spain and Korea Institute of Digital Convergence South Korea on 19-20 February 2022 at New Delhi, India. ICICC-2022 received 864 papers from approximately 3600 authors and a total of 200 papers were accepted with an acceptance ratio of 23%. All accepted papers were published in Springer's Lecture Notes on Networks and Systems, an scopus indexed series. A total of 550 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2022 received papers from 30 countries. Due to unexpected COVID-19, ICICC-2022 was organized in hybrid mode.</p><br />
<h3>LINK OF PROCEEDINGS OF ICICC 2022</h3><br />
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
  </div>
  <Date />

</div>


  </div>
);
};

export default Icicc22;
