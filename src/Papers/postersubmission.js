import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from '../Date';


const PosterSubmission=()=>{
  return(
  <div>
  <h2 class={style.abtHeader}>Call For Poster Paper Presentation</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
  <p>  The scope of this conference is to provide a platform for researchers, engineers, academicians, and industry professionals from all over the world to present their research results and development activities in various topics of Engineering and Technology. It allows participants to discuss the recent developments in the solidification of computer science and management and review challenges faced by the community in the 21st century.
  </p>
  <ol>
    <li>The Original unpublished Research Papers, Articles and working papers having a maximum length of 8 pages on the topics related to the theme are invited for Poster Paper presentations in the conference proceedings.
    </li>
    <li>Kindly ensure your paper is formatted (not exceeding 8 pages written in A4 size).
    All papers must be submitted online via <a href="https://cmt3.research.microsoft.com/ICICC2025">Microsoft CMT Submission Portal</a>
    </li>
    <li>All submissions will be thoroughly peer-reviewed by experts based on originality, significance and clarity.</li>
    <li>Only papers presenting original content with novel research results or successful innovative applications will be considered for Poster Paper Presentation.</li>
  </ol>
<h4>Plagiarism Policy</h4>
    <ol>
        <li>The paper prior to submission should be checked for plagiarism from licensed plagiarism softwares like Turnitin/iAuthenticate etc. The similarity content should not exceed 20% (in any case either self contents or others). Further, you have to strictly implement the following ethical guidelines for publication.</li>
<li>Any form of self-plagiarism or plagiarism from others' work(s) should not be there in an article. <br />If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work.</li>
<li>Also language of explaining it should not be same as language of the work from which you have adopted it. <br />If you are using any copyrighted material, you should acquire prior permission from the copyright holder. </li>
    </ol>
    <br />
    <br />

  </div>
  <Date />

</div>


  </div>
);
};

export default PosterSubmission;
