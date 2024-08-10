import React from 'react';
import style from "../header.module.css";
import { Alert } from 'react-bootstrap';

const awards = {
    "Scientist of the Year": "Khyati Chopra",
    "Young Researcher (Mathematics)": "Namita Tiwari",
    "Research Achievement (Management)": "S. Suganya Bharathi",
    "Research Achievement (Patent Grant)": "Anupam Das",
    "Multidisciplinary Research / International Award": "Sudhanshu Maurya",
    "Best M.Tech Thesis": "Shivangi Verma",
    "Outstanding Academic Leader (Finance)": "Priya Solomon",
    "Lifetime Achievement": "Pradip Desai",
    "Research Achievement Award IT Category": "Vandana Sharma",
    "Academic Professional (Computer Application Category)": "Rabins Porwal",
    "Teaching Excellence Award": "Shaily Jain",
    "Researcher of the Year": "Srishti Vashistha",
    "Outstanding Academic Leader of the Year": "Deepak Garg",
    "Best Researcher Award": "Neeru Mago",
    "Best Teacher Award": "Sachin Subash Patil",
    "Best HOD Women": "Ruchi Agarwal",
    "Multidisciplinary Women Research Astrology": "Udayasri Kompalli",
    "Research Achievement (Computer Science)": "Sheshang Degadwala",
    "Womanovator Award": "Sini Raj Pulari",
    "Student Mentorship Award - Individual": "Sherin Zafar",
    "Social Initiatives Taken by Higher Education Institutions": "Jamia Hamdrad",
    "Best Researcher in Psychology": "Nidhi Verma"
};
const Uila24 = () => {
  return (
    <div className={style.awardsCont}>
    <h4>UNIVERSAL INOVATORS LEADERSHIP AWARDS 2024</h4>
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

export default Uila24