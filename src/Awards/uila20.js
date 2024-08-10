import React from 'react';
import style from "../header.module.css";
import { Alert } from 'react-bootstrap';

const awards = {
  "Young Researcher (Computer Science & Engineering)": "Nitin Kumar",
  "Best Research Project": "Hitesh Panchal",
  "Best Teacher Award (Computer Science & Engineering)": "Anand Trilokinath Upadhyay",
  "Research Achievement Award (Computer Science & Engineering)": "Bhabani Shankar Prasad Mishra",
  "Teaching Excellence Award": "Sarangam Kodati",
  "Best Researcher Award": "K.V.S.S.S. Sairam",
  "Researcher of the Year": "Dipak Shamlal Gade",
  "Outstanding Academician of the Year": "N. Vadivelan",
  "Best Research Thesis Award (Computer Science & Engineering)": "Shilpa Manish Kabra",
  "Best Academic Professional Award": "Saroj Koul",
  "Best Head of Department Award": "Kommineni Kiran Kumar",
  "Best Innovation Award": "Rohan Lekhwani",
  "Research Achievement Award (Management Studies)": "Astha Bhanot Rahul",
  "Young Researcher (Management Studies)": "V. Selva Lakshmi",
  "Young Researcher (Human Resource Management)": "S. Raja",
  "Best Teacher Award (Commerce)": "Kunal Sil",
  "Best Teacher Award (Management)": "Radha Ganesh Kumar",
  "Best Researcher (Economics)": "Saroj Kumar Rana",
  "Best Ph.D Thesis Award (Management Studies)": "Harpreet Bhupendrasingh Sodhi",
  "Best Contributor in the Field of Computer Science & Engineering": "Pradeep Kumar Mallick"
};
const Uila20 = () => {
  return (
    <div className={style.awardsCont}>
    <h4>UNIVERSAL INOVATORS LEADERSHIP AWARDS 2020</h4>
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

export default Uila20;