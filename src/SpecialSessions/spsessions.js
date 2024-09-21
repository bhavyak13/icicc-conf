import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";


const spdata = [
    {
        anchor: require("./SS-001.pdf"),
        title: "Comprehensive Trends and Patterns in AI, Deep Learning, NLP and Blockchain",
        organisers: [
            "Dr. Garima Jaiswal, Assistant Professor, SCSET, Bennett University, India",
            "Dr. Ritu Rani, Research Associate -III (DST Curie AI Project), Indira Gandhi Delhi Technical University for Women, India"
        ],
        spname: "SS 001.pdf"
    },
    {
        anchor: require("./SS-002.pdf"),
        title: "SS_02: Recent Advances in AI and Machine Learning: Innovations, Environmental Sustainability, and Healthcare",
        organisers: [
            "Dr. Sangeeta Kumari, Bennett University (The Times Group), Greater Noida, U.P., India"
        ],
        spname: "SS 002.pdf"
    },
    {
        anchor: require("./SS-003.pdf"),
        title: "SS_03: Recent Advances in Intelligent Systems and Communication & Machine Learning",
        organisers: [
            "Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Uttar Pradesh",
            "Mr. Anup Lal Yadav, Chandigarh University, Mohali, Punjab, India",
            "Mr. Navjot Singh Talwandi, Chandigarh University, Mohali, Punjab, India"
        ],
        spname: "SS 003.pdf"
    },
    {
        anchor: require("./SS-004.pdf"),
        title: "SS_04: Smart Systems and Beyond: Unification of AI, ML and Deep learning in Modern Computing Paradigms",
        organisers: [
            "Dr. Lokesh Jain, Department of Information Technology, Jagan Institute of Management Studies, Rohini, Delhi, India"
        ],
        spname: "SS 004.pdf"
    },
     {
        anchor: require("./SS-005.pdf"),
        title: "SS_05: Cutting-edge Research and Applications in Data Science, Machine Learning, IoT, and the Metaverse",
        organisers: [
            "Dr. Divya Agarwal, Assistant Professor, Vivekananda Institute of Professional Studies-Technical campus, Delhi, India",
            "Dr. Sandhya Tarwani, Assistant Professor, Vivekananda Institute of Professional Studies-Technical campus, Delhi, India"
        ],
        spname: "SS 005.pdf"
    }, 
    {
        anchor: require("./SS-006.pdf"),
        title: "SS_06: Innovative AI-Driven Educational Solutions: Integrating Cutting-Edge Technology with Future Learning",
        organisers: [
            "Assoc. Prof. Mathias Fonkam, Associate Professor, College of Information Sciences and Technology, Penn State University, USA",
            "Assoc. Prof. Narasimha Rao Vajjhala, Dean and Associate Professor, Senior Member of IEEE and ACM, Faculty of Engineering and Architecture, University of New York Tirana, Albania",
            "Dr. Vasileios Paliktzoglou, Assistant Professor, Member of IEEE, School of Creative Media, Bahrain Polytechnic, Bahrain",
            "Dr. Sandeep Singh Sengar, Senior Lecturer and Head of Computer Vision and Artificial Intelligence, College of Information Sciences and Technology, Cardiff Metropolitan University, United Kingdom",
            "Dr. Eriona Çela, Assistant Professor, Department of Psychology and Education, University of New York Tirana, Albania"
        ],
        spname: "SS 006.pdf"
    }, 
    {
        anchor: require("./SS-007.pdf"),
        title: "SS_07: Artificial Intelligence and its Impact on Emerging Technology",
        organisers: [
            "Dr. Uzzal Sharma, Department of Computer Science, Associate Professor, Birangana Sati Sadhani Rajyik Viswavidyalaya, India"
        ],
        spname: "SS 007.pdf"
    }, 
    {
        anchor: require("./SS-008.pdf"),
        title: "SS_08: Next-Generation Networks for High-Performance Computing: Advanced Communication Technologies",
        organisers: [
            "Dr. A. Suresh, Associate Professor, Department of Networking and Communications, School of Computing, SRM Institute of Science and Technology, Chennai, Tamil Nadu, India",
            "Dr. V. Anbarasu, Associate Professor, Department of Networking and Communications, School of Computing, SRM Institute of Science and Technology, Chennai, Tamil Nadu, India"
        ],
        spname: "SS 008.pdf"
    },
     {
        anchor: require("./SS-009.pdf"),
        title: "SS_09: Innovation in Biomedical Engineering",
        organisers: [
            "Dr. Gurmeet Singh (PhD IITD, Associate Professor, Guru Tegh Bahadur Institute of technology ,New Delhi , India",
            "Dr. Ramandeep Singh, Scientist-D, Neuro-engineering Lab, Department of Neurosurgery, AIIMS, New Delhi,India"
        ],
        spname: "SS 009.pdf"
    }, 
     {
         anchor: require("./SS-010.pdf"),
        title: "SS_10:Empirical Continual Learning in Software Engineering ",
         organisers: [
             "Dr. Deepak Sharma, Assistant Professor, Department of Computer Science, Aryabhatta College, South Campus, University of Delhi",
            "Dr. Nitya Khurana, Assistant Professor, Department of Management, Institute Of Innovation In Technology & Management, AFFILIATED TO GGSIPU "
    
         ],
         spname: "SS 010.pdf"
    }, 
    {
        anchor: require("./SS-011.pdf"),
        title: "SS_11: Empirical Artificial Intelligence for Health Care Systems",
        organisers: [
            "Dr. Deepak Sharma, Assistant Professor, Department of Computer Science, Aryabhatta College, South Campus, University of Delhi",
            "Ms. Himani Tyagi , Assistant Professor, University School of Automation and robotics, GGSIPU, Delhi",
            "Mr. Hemant Kumar, Assistant Professor, Department of Computer Science, Aryabhatta College, South Campus, University of Delhi"
        ],
        spname: "SS 011.pdf"
    }, 
    {
        anchor: require("./SS-012.pdf"),
        title: "SS_12: Emerging Trends in NLP, ML and AI for safer online social media",
        organisers: [
            "Dr. Sayani Ghosal, Jaypee Institute of Information Technology (JIIT), Noida, Uttar Pradesh, India",
            "Dr. Ashish Khanna, CSE Department, Maharaja Agrasen Institute of Technology, (GGSIPU), New Delhi, India"
        ],
        spname: "SS 012.pdf"
    }, 
{
        anchor: require("./SS-013.pdf"),
        title: "SS_13: Recent Developments in Disruptive Technologies",
        organisers: [
            "Dr. Rajendra Kumar, Sharda University, Greater Noida, India",
            "Dr. Shruti Aggarwal, Thapar Institute of Engineering and Technology, Patiala, India",
            "Mr. Pradeep Chintale, SEI Investment Company, Downingtown, Pennsylvania, USA",
        ],
        spname: "SS 013.pdf"
    }, 
    {
        anchor: require("./SS-014.pdf"),
        title: "SS_14: Emerging Trends, Challenges and Applications in Data Intelligence and Networking",
        organisers: [
            "Dr. Imran Khan, Assistant Professor, Harcourt Butler Technical University, Kanpur, Uttar Pradesh"
        ],
        spname: "SS 014.pdf"
    },
     {
        anchor: require("./SS-015.pdf"),
        title: "SS_15: Computational Psychology",
        organisers: [
            "Shikha Jain, Jaypee Institute of Information Technology, Noida, Uttar Pradesh, India",
            "Kavita Pandey, Jaypee Institute of Information Technology, Noida, Uttar Pradesh, India",
        ],
        spname: "SS 015.pdf"
    }, 
    {
        anchor: require("./SS-016.pdf"),
        title: "SS_16: Advancements and Applications of Hybrid Soft Computing Techniques for Advanced Healthcare Systems",
        organisers: [
            "Dr. Geetanjali Sharma, Maharaja Surajmal Institute of Technology, New Delhi, India",
            "Dr. Deepika Saxena, The University of Aizu, Japan"

        ],
        spname: "SS 016.pdf"
    },
     {
        anchor: require("./SS-017.pdf"),
        title: "SS_17: Emerging Technologies and its Applications",
        organisers: [
            "Prof.(Dr.) Kaushal Kisor, ABES Institute of Technology Ghaziabad, Uttar Pradesh, India"
        ],
        spname: "SS 017.pdf"
    },
     {
        anchor: require("./SS-018.pdf"),
        title: "SS_18: Recent Advances in AI and Machine Learning: Innovations, Environmental Sustainability, and Healthcare",
        organisers: [
            "Dr. Sangeeta Kumari, Bennett University (The Times Group), Greater Noida, U.P., India"
        ],
        spname: "SS 018.pdf"
    },
     {
        anchor: require("./SS-019.pdf"),
        title: "SS_19:[Advanced Computing Techniques in Electrical Engineering]",
        organisers: [
            "Dr.Paruchuri Chandra Babu Naidu, B.S.Abdur Rahman Crescent Institute of Science and Technology, India,",
        ],
        spname: "SS 019.pdf"
    },
    {
        anchor: require("./SS-020.pdf"),
        title: "SS_20: Internet of Things for Industry 5.0 with Artificial Intelligence-Based Technologies",
        organisers: [
            "Dr. Khyati Chopra",
            "Dr. Sherin Zafar"
        ],
        spname: "SS 020.pdf"
    },
    {
        anchor: require("./SS-021.pdf"),
        title: "SS_21: Role of Generative AI for Healthcare Systems ",
        organisers: [
            "Dr Sonali Vyas, Associate Professor, School of Computer Science, UPES Dehradun, Uttarakhand, India",
            "Dr Mitali Chugh, Associate Professor, School of Computer Science, UPES Dehradun, Uttarakhand, India", 
            "Dr. Vinod Kumar Shukla, Associate Professor, Amity University Dubai, UAE"
        ],
        spname: "SS 021.pdf"
    },
    {
        anchor: require("./SS-022.pdf"),
        title: "SS_22: Advances and Synergies in Deep Learning, Communication Technologies, and Healthcare",
        organisers: [
            "Dr. Sudesh Pahal, Maharaja Surajmal Institute of Technology, New Delhi, India",
            "Dr. Priyanka Nandal, Maharaja Surajmal Institute of Technology, New Delhi, India",
        ],
        spname: "SS 022.pdf"
    },
    {
        anchor: require("./SS-023.pdf"),
        title: "SS_23: AI-Driven Multidisciplinary Analytics: Innovations in Predictive Maintenance, Business Optimization, Education, and Sentiment Analysis",
        organisers: [
            "Dr. Deepti Khanna, Associate Professor, Department of Information Technology (MCA), Jagan Institute of Management Studies, Rohini, Delhi, India",
            "Dr Arpana Chaturvedi, Associate Professor Dept of IT/AI/ML, New Delhi Institute of Management, Delhi, India"
            
        ],
        spname: "SS 023.pdf"
    },
    {
        anchor: require("./SS-024.pdf"),
        title: "SS_24: Cognitive Computing and Computational Intelligence: Human-Machine Interaction",
        organisers: [
            "Prof. Suman Mann, Professor, PIET, Haryana",
            "Dr. Deepshikha Yadav, Assistant Professor, MSIT, New Delhi",             
        ],
        spname: "SS 024.pdf"
    },
    
{
        anchor: require("./SS-025.pdf"),
        title: "SS_25:  Techno-Legal Synergies of Artificial Intelligence, Information & Communication Technology & Computing: Bridging Technology and Law for the Future",
        organisers: [
            "Dr Gagandeep Kaur, Associate Professor, School of Law, UPES, Dehradun, India",
            "Prof. Anil K. Dixit, Professor, Law College Dehradun, Uttaranchal University, Dehradun, India"                
        ],
        spname: "SS 025.pdf"
    },
    {
         anchor: require("./SS-026.pdf"),
        title: "SS_26:Smart Networks: Integrating AI, IoT, and 5G for the Future of Autonomous Systems ",
         organisers: [
            "Dr Suresh Kumar K, Professor and Head, Department of Information Technology, Saveetha Engineering College, Saveetha Nagar, Thandalam Chennai",
             "Dr Hemavathy P, Associate Professor, Department of Computer Science and Engineering, Saveetha Engineering College, Saveetha Nagar, Thandalam Chennai",
             "Dr Anish Kumar J, Associate Professor, Department of Electrical and Electronics Engineering, Saveetha Engineering College, Saveetha Nagar, Thandalam Chennai"
        ],
         spname: "SS 026.pdf"
     },
    
   

];

const SpecialSessions = () => {
    return (
        <div>
            <h2 class={
                style.abtHeader
            }>Special Sessions</h2>
            <hr/>
            <div className={
                style.flex
            }>
                <div className={
                    style.spCont
                }>
                    {
                    spdata.map(sp => {
                        return (
                            <Alert className={
                                style.spMem
                            }>
                                <b>Link</b><br/>
                                <a href={
                                        sp.anchor
                                    }
                                    style={
                                        {
                                            textDecoration: "none",
                                            color: "white"
                                        }
                                }>
                                    {
                                    sp.title
                                }</a>
                                <br/><br/>
                                <b>Organisers</b><br/>
                                <p style={
                                    {
                                        width: "300px",
                                        fontSize: "14px"
                                    }
                                }>
                                    {
                                    sp.organisers.map(org => {
                                        return (
                                            <li>{org}</li>
                                        );
                                    })
                                } </p>
                                <b>Listing</b>
                                <br></br>
                                <a href={
                                        sp.anchor
                                    }
                                    style={
                                        {
                                            textDecoration: "none",
                                            color: "white"
                                        }
                                }>
                                    {
                                    sp.spname
                                }</a>
                            </Alert>
                        );
                    })
                } </div>
            </div>
        </div>


    );
}

export default SpecialSessions;
