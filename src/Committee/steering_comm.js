import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from "../Date";

const SteerCom=()=>{

    const steer_comm_mem=[{
        "Name":"Patron(s)",
        List:[
            {"MemName":"Dr. Poonam Verma",
            "InstName":"(Principal, SSCBS, University of Delhi)"},
            {"MemName":"Prof. Pradip Kumar Jain",
            "InstName":"(Director, National Institute of Technology Patna)"}
        ]
    },
    {
        "Name":"General Chair(s)",
        List:[
            {"MemName":"Dr. Prabhat Kumar",
            "InstName":"(Professor, CSE, National Institute of Technology Patna)"},
            {"MemName":"Prof. Oscar Castillo",
            "InstName":"(Tijuana Institute of Technology, Mexico)"}
        ]
    },  {
        "Name":"Honorary Chair(s)",
        List:[
            {"MemName":"Prof. Janusz Kacprzyk",
            "InstName":"(Head, Intelligent Systems Laboratory, System Research Institute, Polish Academy of Sciences, Warsaw, Poland)"},
            {"MemName":"Prof. Vaclav Snasel",
            "InstName":"(Rector, VSB-Technical University of Ostrava, Czech Republic)"}
        ]
    },  {
        "Name":"Conference Chair(s)",
        List:[
            {"MemName":"Prof. Aboul Ella Hassanien",
            "InstName":"(Cairo University, Egypt)"},
            {"MemName":"Prof. Joel J P C Rodrigues",
            "InstName":"(National Institute of Telecommunications (Inatel), Brazil)"},
            {"MemName":"Prof. R. K. Agrawal",
            "InstName":"(Jawaharlal Nehru University, Delhi)"}
        ]
    },  {
        "Name":"Technical Program Chair(s)",
        List:[
            {"MemName":"Prof. Anil K Ahlawat",
            "InstName":"(KIET Group of Institutes, Ghaziabad)"},
            {"MemName":"Prof. A. K. Singh",
            "InstName":"(National Institute of Technology, Kurukshetra)"}
        ]
    },  {
        "Name":"Editorial Chair(s)",
        List:[
            {"MemName":"Dr. Arun Sharma",
            "InstName":"(Indira Gandhi Delhi Technical University for Womens, Delhi)"},
            {"MemName":"Prof. Abhishek Swaroop",
            "InstName":"(Bhagwan Parshuram Institute of Technology, Delhi)"}
        ]
    },  {
        "Name":"Publication Chair(s)",
        List:[
            {"MemName":"Dr. Vicente García Díaz",
            "InstName":"(University of Oviedo, Spain)"},
            {"MemName":"Dr. Deepak Gupta",
            "InstName":"(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)"}
        ]
    },  {
        "Name":"Co-Convener(s)",
        List:[
            {"MemName":"Moolchand Sharma",
            "InstName":"(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)"},
            {
                "MemName":"Dr. Simar Preet Singh",
                "InstName":"(School of Computer Science Engineering and Technology (SCSET), Bennett University, Greater Noida, Uttar Pradesh, India)"
            }
         
        ]
    },  {
        "Name":"Publicity Chair(s)",
        List:[
            {"MemName":"Dr. Jafar A. Alzubi",
            "InstName":"(Al-Balqa Applied University, Salt – Jordan)"},
            {"MemName":"Dr. Hamid Reza Boveiri",
            "InstName":"(Sama College, IAU, Shoushtar Branch, Shoushtar, Iran)"},
            {
            "MemName":"Dr. M. Tanveer",
            "InstName":"(Indian Institute of Technology, Indore)"
            },
            {
            "MemName":"Dr. Umesh Gupta",
            "InstName":"(Bennett University, Greater Noida)"
            },{
                "MemName":"Dr. Nitish Pathak",
                "InstName":"(Bhagwan Parshuram Institute of Technology, New Delhi, India)"
            },
            {
                "MemName":"Ahmed J. Obaid",
                "InstName":"(University of Kufa, Iraq)"
            },
            {
                "MemName":"Dr. Sushil Kumar Singh",
                "InstName":"(Department of Computer Engineering,Marwadi University, Rajkot, Gujrat, India)",
            },
            {
                "MemName":"Dr. Sherin Zafar",
                "InstName":"(Jamia Hamdard,Deputy Director Innovation Cell,Coordinator Unnat Bharat Abhiyan Jamia Hamdard)",
            }
        ]
    },  {
        "Name":"Organizing Chair(s)",
        List:[
            {"MemName":"Dr. Kumar Bijoy",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Rishi Ranjan",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Amrina Kausar",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Abhishek Tandon",
            "InstName":"(SSCBS, University of Delhi)"}
        ]
    },  {
        "Name":"Organizing Team",
        List:[
            {"MemName":"Dr. Gurjeet Kaur",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Abhimanyu Verma",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Onkar Singh",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Mona Verma",
            "InstName":"(SSCBS, University of Delhi)"},
            {"MemName":"Dr. Suresh Chavhan",
            "InstName":"(Vellore Institute of Technology, Vellore)"
            }
        ]
    },  {
        "Name":"Organising Secretary",
        List:[
            {"MemName":"Dr. Ashish Khanna",
            "InstName":"(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)"},
            {"MemName":"Dr. Gulshan Shrivastava",
            "InstName":"( Galgotias University, India.)"}
        ]
    },  {
        "Name":"Convener(s)",
        List:[
            {"MemName":"Dr. Ajay Jaiswal",
            "InstName":"(SSCBS, University of Delhi, India)"},
            {"MemName":"Dr. Sameer Anand",
            "InstName":"(SSCBS, University of Delhi, India)"}
        ]
    }

    
]
   
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