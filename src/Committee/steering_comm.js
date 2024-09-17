import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from "../Date";

const SteerCom=()=>{

    const steer_comm_mem = [
        {
            "Name": "Patron(s)",
            "List": [
                { "MemName": "Dr. Poonam Verma", "InstName": "(Principal, SSCBS, University of Delhi)" },
                { "MemName": "Prof. Pradip Kumar Jain", "InstName": "(Director, National Institute of Technology Patna)" }
            ]
        },
        {
            "Name": "General Chair(s)",
            "List": [
                { "MemName": "Prof. Dr. Bal Virdee", "InstName": "(London Metropolitan University, London, UK)" },
                { "MemName": "Dr. Prabhat Kumar", "InstName": "(Professor, CSE, National Institute of Technology Patna)" }
            ]
        },
        {
            "Name": "Honorary Chair(s)",
            "List": [
                { "MemName": "Prof. Janusz Kacprzyk", "InstName": "(Head, Intelligent Systems Laboratory, System Research Institute, Polish Academy of Sciences, Warsaw, Poland)" },
                { "MemName": "Prof. Vaclav Snasel", "InstName": "(Rector, VSB-Technical University of Ostrava, Czech Republic)" }
            ]
        },
        {
            "Name": "Conference Chair(s)",
            "List": [
                { "MemName": "Prof. Punam Bedi", "InstName": "(Department of Computer Science, University of Delhi)" },
                { "MemName": "Prof. R. K. Agrawal", "InstName": "(Jawaharlal Nehru University, Delhi, India)" }
            ]
        },
        {
            "Name": "Technical Program Chair(s)",
            "List": [
                { "MemName": "Prof. A. K. Singh", "InstName": "(National Institute of Technology, Kurukshetra, India)" },
                { "MemName": "Dr. Kumar Bijoy", "InstName": "(Associate Professor, Shaheed Sukhdev College of Business Studies, DU)" }
            ]
        },
        {
            "Name": "Editorial Chair(s)",
            "List": [
                { "MemName": "Prof. Aboul Ella Hassanien", "InstName": "(Cairo University, Egypt)" },
                { "MemName": "Prof. Abhishek Swaroop", "InstName": "(Bhagwan Parshuram Institute of Technology, Delhi, India)" }
            ]
        },
        {
            "Name": "Convener(s)",
            "List":[
            {"MemName":"Dr. Ajay Jaiswal",
            "InstName":"(DEPARTMENT OF DISTANCE AND CONTINUING EDUCATION SCHOOL OF OPEN LEARNING, CAMPUS OF OPEN LEARNING, UNIVERSITY OF DELHI)"},
            {"MemName":"Dr. Sameer Anand",
            "InstName":"(Department of Operational Research,Delhi University, India)"}
        ]
        },
        {
            "Name": "Co-Convener(s)",
            "List": [
                { "MemName": "Dr. Moolchand Sharma", "InstName": "(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)" },
                { "MemName": "Dr. Jameel Ahmed", "InstName": "(Maulana Azad National Urdu University (MANUU), Hyderabad, India)" },
                { "MemName": "Dr. Amrina Kausar", "InstName": "(Associate Professor, Shaheed Sukhdev College of Business Studies, DU)" }
            ]
        },
        {
            "Name": "Publicity Chair(s)",
            "List": [
                { "MemName": "Dr. Jafar A. Alzubi", "InstName": "(Al-Balqa Applied University, Salt – Jordan)" },
                { "MemName": "Dr. Hamid Reza Boveiri", "InstName": "(Sama College, IAU, Shoushtar Branch, Shoushtar, Iran)" }
            ]
        },
        {
            "Name": "Organising Secretary (s)",
            "List": [
                { "MemName": "Dr. Rishi Rajan Sahay", "InstName": "(Associate Professor, Vice Principal, Shaheed Sukhdev College of Business Studies, DU)" },
                { "MemName": "Dr. Gulshan Shrivastava", "InstName": "(Associate Professor, Bennett University, Greater Noida, India)" }
            ]
        }
    ];
    
   
return(
    <div>
         <h2 class={style.abtHeader}>Steering Committee</h2>
        <hr />
        <div className={style.flex}>
        <div className={style.techCont}>          
            {steer_comm_mem.map(obj=>{
                
                return(<div>
                <h4>{obj.Name}:</h4>
                {obj.List.map(guest => {
                return(
                    <Alert className={style.advMem}>
                    <p style={{fontWeight:"500",width:"300px",fontSize:"14px"}}>
                    {guest.MemName}
                    </p>
                    <p>
                    {guest.InstName}
                    </p>
                    </Alert>
                );
                })
                }
                </div>                    
                );
            })
                
            }
        </div>
        <Date />
        </div>
    </div>
)

}
export default SteerCom;