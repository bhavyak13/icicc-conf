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
            "InstName":"(Associate Professor, CSE, National Institute of Technology Patna)"},
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
         
        ]
    },  {
        "Name":"Publicity Chair(s)",
        List:[
            {"MemName":"Dr. Jafar A. Alzubi",
            "InstName":"(Al-Balqa Applied University, Salt – Jordan)"},
            {"MemName":"Dr. Hamid Reza Boveiri",
            "InstName":"(Sama College, IAU, Shoushtar Branch, Shoushtar, Iran)"},{
            "MemName":"Dr. M. Tanveer",
            "InstName":"(Indian Institute of Technology, Indore)"
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
            "InstName":"( Sharda University, Gr. Noida.)"}
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