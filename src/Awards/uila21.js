import React from 'react';
import style from "../header.module.css";
import { Alert } from 'react-bootstrap';

const awards = {
  "Lifetime Achievement Award": "Dr. SUBHASH CHANDRA KULSHRESHTHA",
  "Young Researcher Award in the International": "Utku KOSE",
  "Young Researcher Award in National": "Dr. Gulshan Shrivastava",
  "Outstanding Academic Leader of the Year": "Prof. (Dr.) Vijay Singh Rathore",
  "Outstanding Researcher Leadership Award": "Dr. Meenakshi Sharma",
  "Best Researcher Award in Biotechnology": "Dr. Avinash Marwal",
  "Best Researcher Award in Computer Science": "Dr. Amit Kumar Singh",
  "Best Researcher Award in Electrical Engineering": "Dr. Yogendra Arya",
  "Best Researcher Award in Management": "Dr. K. LINGARAJA",
  "Best Researcher Award in Mathematics": "Dr. Priyanka Kaushal",
  "Young Innovator Award in International": "Nirmalya Thakur",
  "Young Innovator Award in Computer Science": "Puneet Garg",
  "Young Innovator Award in Civil Engineering": "Mr Amarender Kadian",
  "Best Innovation Award in Computer Science": "Dr. Rik Das",
  "Best Innovation Award in Electronics and Communication": "Dr Tushar Hrishikesh Jaware",
  "Best PG Thesis Award": "Sandipan Dhar",
  "Best PhD Thesis Award in Computer Science": "Dr. Abhishek Verma",
  "Best PhD Thesis Award in Biotechnology": "Dr. Thirumal Kumar D",
  "Best PhD Thesis Award in Electrical Engineering": "Mohd Adil Sheikh",
  "Best PhD Thesis Award in Arts": "Dr. Abdul Salam Khan",
  "Best Research Project Award": "Deborsi Babu",
  "Academic Proficiency Award in Electronics and Communication": "Dr.R.GAYATHRI",
  "Teaching Excellence Award in Computer Science": "Dr. Sonali Ridhorkar",
  "Teaching Excellence Award in Management": "Dr. Meenakshi Tomar",
  "Best Teacher Award": "Dr. Smita Nirkhi",
  "Best Head of Department Award in Computer Science": "Prof. Deepali Virmani",
  "Best Head of Department Award in Information Technology": "Moirangthem Marjit Singh",
  "Best Director Award": "Dr. Vivek Kapur",
  "Best Principal Award": "Dr. Santosh Kumar",
  "Scientist of the Year Award": "Dr Pankaj B Agrawal",
  "Highly Cited Paper Award": "Dr. Padmalaya Nayak",
  "Supervisor of the Year Award": "Abhishek Swaroop",
  "Academic Professional Award in Computer Science": "Dr. Nitin Kumar",
  "Best Entrepreneur Award": "Devansh Jain Nawal",
  "Best Entrepreneur Award": "Ackshay Jain",
  "Higher Education Award category Best Engineering College Award": "Shri Ram Group of Colleges Muzaffarnagar",
  "Higher Education Award category Outstanding ICT Initiative of the Year": "IIS University, Jaipur"
};
const Uila21 = () => {
  return (
    <div className={style.awardsCont}>
    <h4>UNIVERSAL INOVATORS LEADERSHIP AWARDS 2021</h4>
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

export default Uila21