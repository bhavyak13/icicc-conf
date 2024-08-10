import React from 'react';
import style from "../header.module.css";
import { Alert } from 'react-bootstrap';

const awards = {
  "Womanator Award": "Ms. Mitali Chandola",
  "Researcher of the Year Award": "Dr. Sheshang Degadwala",
  "Research Achievement Award": "Dr. Sudhanshu S. Gonge",
  "Best Research Thesis Award": "Dr. Umesh Gupta",
  "Professor of the Year Award": "Dr. Achal Kaushik",
  "Best Research Paper Award": "Dr. Umesh Gupta",
  "Academic Professional Award": "Dr. Sumanta Chatterjee",
  "Administrator of the Year Award": "Dr. Achal Kaushik"
};
const Uila23 = () => {
  return (
    <div className={style.awardsCont}>
    <h4>UNIVERSAL INOVATORS LEADERSHIP AWARDS 2023</h4>
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

export default Uila23;