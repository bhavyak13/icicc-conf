import React from 'react';
import style from "../header.module.css";
import { Alert } from 'react-bootstrap';

const awards = {
    "Young Scientist Award": "SWEETY NAIN",
    "Young Researcher Award (National)": "SAGAR PANDE",
    "Young Innovator Award": "SUDIP ROY",
    "Best Dean of the Department Award (Research & Development)": "SHAIK MAHABOOB BASHA",
    "Best Director Award": "DEEPALI SAWAI",
    "Best Head of Department Award": "A NARASIMA VENKATESH",
    "Best PhD Thesis Award": "SAGAR DHANRAJ PANDE",
    "Best Researcher Award (Computer Science)": "AKSHI KUMAR",
    "Best Researcher Award (Commerce)": "AARTI SAINI",
    "Best Researcher Award (International)": "ASTHA BHANOT",
    "Faculty of the Year (Computer Science)": "SHESHANG DIPAKKUMAR DEGADWALA",
    "Outstanding ICT Initiative of the Year": "INSTITUTE OF INDUSTRIAL AND COMPUTER MANAGEMENT AND RESEARCH (IICMR), NIGDI, PUNE",
    "Outstanding Researcher Leadership Award": "S.C. SATAPATHY",
    "Social Impact Award (Education)": "TARIQ HUSSAIN SHEIKH",
    "Womanovator Award (Computer Science)": "SHRUTI AGGARWAL",
    "Teaching Excellence (Mechanical Engineering)": "KETAN D PANCHAL",
    "Young Researcher Award": "SONALI VYAS",
    "Researcher of the Year Award": "SITA RANI",
    "Research Achievement Award (Behavioral & Allied Sciences)": "NIDHI VERMA",
    "Faculty of the Year (Applied Sciences)": "A NAGARJUNA",
    "Best Teacher Award": "CHITTRANJAN PRADHAN",
    "Administrator of the Year": "DR. BHUPENDRA SINGH"
};
const Uila22 = () => {
  return (
    <div className={style.awardsCont}>
    <h4>UNIVERSAL INOVATORS LEADERSHIP AWARDS 2022</h4>
    <hr />
    

      <div className="col-md-12">
        <div className="row">
          {Object.entries(awards).map(([award, awardee]) => (
            <div className="col-md-3">
            <Alert className={style.indAlert} key={award}>
              <h5 style={{ color: "#31708f" }}> {award} </h5>
              <hr />
              <h6 className={style.indCont}>
               {awardee}
              </h6>
            </Alert>
          </div>
           ))}
                 
        </div>
      </div>
    </div>
  );
}

export default Uila22;