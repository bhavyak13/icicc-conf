import React from "react";
import Date from "../Date";
import style from "../header.module.css";

const Icicc24=()=>{
    const links=[{
        title:"Volume 1",
        anchor:"https://link.springer.com/book/9789819735877",
        val:"https://link.springer.com/book/9789819735877"
    },
    {
        title:"Volume 2",
        anchor:"https://link.springer.com/book/9789819735907",
        val:"https://link.springer.com/book/9789819735907"

    },
    {
        title:"Volume 3",
        anchor:"https://link.springer.com/book/9789819741519",
        val:"https://link.springer.com/book/9789819741519"
        
    },
    {
        title:"Volume 4",
        anchor:"https://link.springer.com/book/9789819738168",
        val:"https://link.springer.com/book/9789819738168"
    },
    {
        title:"Volume 5",
        anchor:"https://link.springer.com/book/9789819741489",
        val:"https://link.springer.com/book/9789819741489"

    },
    {
        title:"Volume 6",
        anchor:"https://link.springer.com/book/9789819742271",
        val:"https://link.springer.com/book/9789819742271"        
    }
    ]
    const videos=[{
        title:"Inaugural Ceremony of ICICC 2024",
        anchor:<iframe width="360" height="240" src="https://www.youtube.com/embed/JcfW9UUq_hs?si=TRCm4o1YPFtR8wwu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
        
    },
    {
        title:"ICICC 2024 Keynotes (Day 1)",
        anchor:<iframe width="360" height="240" src="https://www.youtube.com/embed/3Xvj5eOH_xI?si=c9snQGDPH_ygul6l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    },
    {
        title:"ICICC 2024 Keynotes (Day 2)",
        anchor:<iframe width="360" height="240" src="https://www.youtube.com/embed/uOyFLThnwfo?si=OHy52Z5g_Z92hSsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
    ]
  return(
  <div>
  <h2 class={style.abtHeader}>ICICC 2024</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <p style={{fontSize:15,letterSpacing:1}}>The seventh version of the International Conference in Innovative Computing and Communication (ICICC-2024) was organized at Shaheed Sukhdev College of Business Studies in association with the National Institute of Technology Patna and the University of Valladolid Spain, on 16-17 February 2024 at New Delhi, India. ICICC-2024 received 1350 papers from approximately 4000 plus authors and a total of 288 papers were accepted with an acceptance ratio of 21%. All accepted papers were published in Springer's Lecture Notes on Networks and Systems, a Scopus-indexed series. A total of 750 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2024 received papers from 35 countries. ICICC-2024 was organized in hybrid mode.</p><br />
<h3>LINK OF PROCEEDINGS OF ICICC 2024</h3><br />
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

    <h3>VIDEOS OF ICICC 2024</h3><br />
<div className={style.volumes}>
		<div class="table table-bordered table-hover" style={{textAlign:"left"}}>
            <div>
            {videos.map((link)=>{
                return (
                <div>
                    <h4>{link.title}:</h4>
                    {link.anchor}
                </div>
                );
            })}
              
            </div>
          </div>
</div>
  </div>
  <Date />

</div>


  </div>
);
};

export default Icicc24;
