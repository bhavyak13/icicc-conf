import React from "react";
import Date from "../Date";
import style from "../header.module.css";

const Sponsorship=()=>{
  return(
  <div>
  <h2 class={style.abtHeader}>Sponsorship</h2>
  <hr />
  <div className={style.flex}>
  <div className={style.abtInstCont}>
    <h4>INVITATION LETTER FOR SPONSORSHIP</h4> <br ></br>
    <b>Dear Technology Leader,</b><br /><br />
    <p style={{fontSize:15,letterSpacing:1}}>In the era of digital revolution where world is becoming smaller and a lot of new technologies are being launched simultaneously. The ongoing saga of the computing and communication digital revolution, the new mantra - Extend and Adapt, has produced ripples of excitement in the industry and academia! Therefore, to make a developed India and to match the speed of these above mentioned challenges joint efforts from Industry and Academia are required. Academia is doing its bit by organizing the international conference ICICC 2022 and bringing together worlds the best technological brains and ideas under one roof. <span className={style.highlight}>This kind of initiative require lot of efforts and funding.</span>Fifth International Conference on Innovative Computing and Communication (ICICC 2022) is organized with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. This conference will try to take the research to the new level with the motive of applying research into the development of startups and industry-based applications. It will also bridge the gap between industry/ Start-up requirements and research-based activities that further will give a new direction to the research happening in and around the world. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research. ICICC 2022 will be hosted by Shaheed Sukhdev College of Business Studies (University of Delhi) in association with National Institute of Technology Patna, a place to pursue knowledge beyond traditional boundaries. An institute initiated to impart quality education to the youth while equipping them with knowledge and skills which would enable them to leave their individual mark in the business world.</p> <br />

    <p style={{fontSize:15,letterSpacing:1}}>The committee of professionals dedicated towards the conference is striving to achieve a high quality technical program with Tracks on <span className={style.highlight}>Innovative Computing, Innovative Communication Network and Security, and Internet of Things</span> The highlights of the conference are as follows:</p>
    <img src={require('./Images/sponsor-content.png')} style={{width:"60vw",margin:5}}></img>
    <br />
    <p style={{fontSize:15,letterSpacing:1}}>As a spearheading force in the industry driving forward this revolution, ICICC 2022 provides just the right platform and visibility to showcase your company, its vision and its technological offerings to a wide spectrum of professionals. Your participation will give an opportunity to nurture the talent pool and spur a collaborative atmosphere necessary for progress.<br />
Kindly see the various sponsorship packages and offers and give us an opportunity to collaborate on this initiative and work together for its success right from the outset</p>
<br /><br />
<b>Yours Sincerely,<br />General Chair</b>
<br /><br />
<a href={require('./Sponsorship.pdf')}>Sponsorship</a>
<br /><br />
  </div>
  <Date />

</div>


  </div>
);
};

export default Sponsorship;
