import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";


const spdata = [
    {
        anchor: require("./SS-001.pdf"),
        title: "Artificial Intelligence in Cyber Security",
        organisers: [
            "Dr. Shivi Garg, J.C. Bose University of Science & Technology, YMCA, Faridabad, India",
            "Dr. Saumya Bansal, Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM), New Delhi, India"
        ],
        spname: "SS 001.pdf"
    },
    {
        anchor: require("./SS-002.pdf"),
        title: "SS_02: Multidisciplinary Aspects of Cyber Security",
        organisers: [
            "Dr. Zahid, State University of New York Polytechnic Institute, Utica, USA",
            "Dr. Shivi Garg, J.C. Bose University of Science & Technology, YMCA, Faridabad, India","Dr. Bhawna Narwal, Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi, India"
        ],
        spname: "SS 002.pdf"
    },
    {
        anchor: require("./SS-003.pdf"),
        title: "SS_03: Massive IoT Connectivity for Large-Scale Mobile Communications",
        organisers: [
            "Dr. A. Suresh,Associate Professor, Department of Networking and Communications,School of Computing, SRM Institute of Science and Technology, Chennai, Tamil Nadu, India"
        ],
        spname: "SS 003.pdf"
    },
    {
        anchor: require("./SS-004.pdf"),
        title: "SS_04: Emerging Intelligent Computing Techniques and their Applications (EICTA)",
        organisers: [
            "Dr. Nitish Pathak Associate Professor,Bhagwan Parshuram Institute of Technology (BPIT), Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi, India",
            "Dr. Neelam Sharma Assistant Professor, Maharaja Agrasen Institute of Technology (MAIT), Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi, India"
        ],
        spname: "SS 004.pdf"
    },
     {
        anchor: require("./SS-005.pdf"),
        title: "SS_05: Research Trends in Data Science, IoT and Computational Intelligence in 6G Communications",
        organisers: [
            "Dr. Rajendra Kumar, Department of Computer Science & Engineering, Sharda University, India",
            "Dr. Shruti Aggarwal, Department of Computer Science and Engineering, Thapar University, Patiala, India"
        ],
        spname: "SS 005.pdf"
    }, 
    {
        anchor: require("./SS-006.pdf"),
        title: "SS_06: Innovative Research Trends in Business Intelligence and Analytics",
        organisers: [
            "Dr. Abha Kiran Rajpoot, Department of CSE(AI&ML), KIET Group of Institutions, Ghaziabad, India",
            "Dr. Gaurav Agrawal, Department of CSE(AI), KIET Group of Institutions, Ghaziabad, India",
            "Mr. Anurag Gupta, Department of CSE(AI), KIET Group of Institutions, Ghaziabad, India"
        ],
        spname: "SS 006.pdf"
    }, 
    {
        anchor: require("./SS-007.pdf"),
        title: "SS_07: Artificial Intelligence for Sustainable Computing and Business Practices",
        organisers: [
            "Dr. Arti Jain, Jaypee Institute of Information Technology, Noida, Uttar Pradesh, India",
            "Prof. Divakar Yadav, School of Computer and Information Sciences, IGNOU, New Delhi, India",
            "Prof. Santoshi Sengupta, Graphic Era Hill University, Bhimtal, Uttarakhand, India"
        ],
        spname: "SS 007.pdf"
    }, 
    {
        anchor: require("./SS-008.pdf"),
        title: "SS_08: Multi-Objective Optimization: Advancements and Future Prospects",
        organisers: [
            "Dr. Aditya Gupta, Manipal University Jaipur, India",
            "Dr. Vibha Jain, Manipal University Jaipur, India",
            "Dr. Gunjan, National Institute of Technology, Delhi, India"
        ],
        spname: "SS 008.pdf"
    }, {
        anchor: require("./SS-009.pdf"),
        title: "SS_09: Contemporary Innovations in Data Sciences, Internet of Things (IoT) and Wireless Communication",
        organisers: [
            "Dr. Gurpreet Singh, Punjab Institute of Technology, Rajpura (MRSPTU, Bathinda), Punjab",
            "Dr. Amanpreet Kaur, CUIET, Chitkara University, Rajpura, Punjab",
            "Dr. Aashdeep Singh, Punjab Institute of Technology, Rajpura (MRSPTU, Bathinda), Punjab",
            "Dr. Rohan Gupta, Chandigarh University, Gharaun, Mohali, Punjab"
        ],
        spname: "SS 009.pdf"
    }, 
    {
        anchor: require("./SS-010.pdf"),
        title: "SS_10:Recent Advances in Intelligent Systems and Communication & Machine Learning",
        organisers: [
            "Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Uttar Pradesh, India, vikas.yadav.cs@gmail.com",
            "Dr. Chuan-Ming Liu, National Taipei University of Technology (NTUT),Taipei,Taiwan",
            "Dr. Ajimuse, Muyiwa Sunday, Federal university Oye Ekiti, Nigeria"
        ],
        spname: "SS 010.pdf"
    }, 
    {
        anchor: require("./SS-011.pdf"),
        title: "SS_11: Intelligent Applications and Contemporary Business Prospects for Autonomous Vehicles",
        organisers: [
            "Dr Suganthi Evangeline, Assistant Professor (Sl. Gr), Consultant in Embedded and IoT Research,Department of Electronics and Communication Engineering, Sri Eshwar College of Engineering, Coimbatore, India",
            "Dr Emmanuel Joy, Assistant Professor, School of Computer Science and Technology,Karunya Institute of Technology and Sciences, Coimbatore, India"
        ],
        spname: "SS 011.pdf"
    }, 
    {
        anchor: require("./SS-012.pdf"),
        title: "SS_12: Antennas and Embedded Systems",
        organisers: [
            "Hamzah M. Marhoon, Al-Nahrain University, College of Information Engineering, Republic of Iraq"
        ],
        spname: "SS 012.pdf"
    }, {
        anchor: require("./SS-013.pdf"),
        title: "SS_13: AI and Machine Learning for Blockchain, Social network analysis, and Computational Intelligence Optimization",
        organisers: [
            "Dr. Umesh Gupta, Associate Professor, SR University, Warangal, India",
        ],
        spname: "SS 013.pdf"
    }, 
    {
        anchor: require("./SS-014.pdf"),
        title: "SS_14: Interpretable Machine Learning and Model Explainability",
        organisers: [
            "Dr. Uzzal Sharma, Associate Professor, Birangana Sati Sadhani Rajyik Viswavidyalaya, India"
        ],
        spname: "SS 014.pdf"
    },
     {
        anchor: require("./SS-015.pdf"),
        title: "SS_15: Data Driven Intelligence for Future Generation Computing Systems",
        organisers: [
            "Dr. Akash Sinha, School of Computer Science and Engineering,            Vellore Institute of Technology, Vellore, India",
            "Dr. Hiteshwar Kumar Azad, School of Computer Science and Engineering,    Vellore Institute of Technology, Vellore, India",
        ],
        spname: "SS 015.pdf"
    }, 
    {
        anchor: require("./SS-016.pdf"),
        title: "SS_16: [BlockChain and Artificial Intelligence]",
        organisers: [
            "Dr. Anshu Khurana, Maharaja Agrasen Institute of Technology, Rohini, India",
            "Dr. Deepika Bansal, Maharaja Agrasen Institute of Technology, Rohini, India"

        ],
        spname: "SS 016.pdf"
    },
     {
        anchor: require("./SS-017.pdf"),
        title: "SS_17: Computational Optimization and AI in Civil Engineering",
        organisers: [
            "Prof. Dr. Gebrail BEKDAŞ, Istanbul University- Cerrahpaşa, Turkey",
            "Prof. Dr. Sinan Melih NİGDELİ, Istanbul University- Cerrahpaşa, Turkey"
        ],
        spname: "SS 017.pdf"
    }, {
        anchor: require("./SS-018.pdf"),
        title: "SS_18: Emerging Trends, Challenges and Applications in Data Intelligence and Biomedical Sciences",
        organisers: [
            "Dr. Imran Khan, Assistant Professor, Harcourt Butler Technical University (H.B.T.U.) Kanpur, Uttar Pradesh",            
            "Dr Asif Khan, Assistant Professor, Integral University, Lucknow",            
            "Dr. Ahmad Neyaz Khan, Assistant Professor,Integral University, Lucknow"
        ],
        spname: "SS 018.pdf"
    },
     {
        anchor: require("./SS-019.pdf"),
        title: "SS_19:The Future of AI: Emerging Innovative Computing Techniques and Applications",
        organisers: [
            "Dr. Jyoti Khurana, Maharaja Surajmal Institute of Technology (MSIT), Guru Gobind Singh Indraprastha University (GGSIPU), New-Delhi, India",
            "Dr. Pooja Kherwa, Maharaja Surajmal Institute of Technology (MSIT), Guru Gobind Singh Indraprastha University (GGSIPU), New-Delhi, India",
            "Mr. Akshay Singh, Maharaja Surajmal Institute of Technology (MSIT), Guru Gobind Singh Indraprastha University (GGSIPU), New-Delhi, India",
        ],
        spname: "SS 019.pdf"
    },
    {
        anchor: require("./SS-020.pdf"),
        title: "SS_20: Smart Intelligent Computing In Advanced Sectors (SICAS)",
        organisers: [
            "Dr.Srikanta Kumar Mohapatra"
        ],
        spname: "SS 020.pdf"
    },
    {
        anchor: require("./SS-021.pdf"),
        title: "SS_21: SPECIAL SESSION ON BIG DATA ANALYTICS, DATA SCIENCES AND NEURAL NETWORKS",
        organisers: [
            "Dr. Preeti Nagrath, Bharati Vidyapeeth’s College of Engineering, New Delhi",
            "Dr. Rachna Jain, Bhagwan Parshuram Institute of Technology, New Delhi"
        ],
        spname: "SS 021.pdf"
    },
    {
        anchor: require("./SS-022.pdf"),
        title: "SS_22: Harvesting the Future: Advancements in innovative computing and communication for Agricultural Applications",
        organisers: [
            "Stefano Rinaldi, University of Brescia – Department of Information Engineering, Italy", 
        ],
        spname: "SS 022.pdf"
    },
    {
        anchor: require("./SS-023.pdf"),
        title: "SS_23: Computer Networking, Security & Data Analytics",
        organisers: [
            "Prof Bal Virdee, Senior Professor & Head of Communications Technology Research Centre Chair & Executive Member of IET Technical Professional Network Chair of Judges - The IET Excellence & Innovation Awards,2023 London Metropolitan University, UK",
            "Mrs Richa Sharma, Senior Lecturer in Computer Networking,London Metropolitan University, UK",
            "Dr Sandra Fernando,Senior Lecturer in Computing,London Metropolitan University, UK"
            
        ],
        spname: "SS 023.pdf"
    },
    // {
    //     anchor: require("./SS-024.pdf"),
    //     title: "SS_24: Application of AI and Deep learning in the diagnosis of diseases",
    //     organisers: [
    //         "Dr. Bhagyashree S R, India",             
    //     ],
    //     spname: "SS 024.pdf"
    // },
    // {
    //     anchor: require("./SS-025.pdf"),
    //     title: "SS_25:  Role of ML and DL Techniques in Healthcare: Security, Privacy & Open Challenges ",
    //     organisers: [
    //         "Dr Neha Sharma, Rajpura, Punjab, India",   
    //         "Dr Deepika Kumar, New Delhi, India"          
    //     ],
    //     spname: "SS 025.pdf"
    // },{
    //     anchor: require("./SS-026.pdf"),
    //     title: "SS_26:  Security and Privacy in the Cloud ",
    //     organisers: [
    //         "Prof. Naren.J, Bangalore, India",   
    //         "Dr. Suchitra. R. Nair, Bangalore, India"          
    //     ],
    //     spname: "SS 026.pdf"
    // },
    
   

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
