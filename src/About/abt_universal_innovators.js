import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from "../Date";

const AboutUniversalInnovators=()=>{
  return(
  <div>
  <h2 class={style.abtHeader}>About Univeral Innovators</h2>
  <hr style={{width:'63vw'}}/>
  <div className={style.flex}>
  <div className={style.abtInstCont}>
  <p >Every success story begins with a vision. The Universal Innovators (UI) is a private and autonomous body promoting research based activities all over the world. The UI aims to do non-profit collaborative research in the field of engineering, applied sciences and management. We aim to be the leading independent academic and professional body working in collaboration with academicians, faculties, students, researchers and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation. The mission of Universal Innovators is to cultivate and carry out research in high- tech methodologies. We deal in conducting FDP’s, workshops, seminars, and conferences. As a recognized body, Universal Innovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.
  </p>
  </div>
  <Date />

</div>


  </div>
);
};

export default AboutUniversalInnovators;
