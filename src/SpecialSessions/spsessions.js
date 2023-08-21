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
    // {
    //     anchor: require("./SS-011.pdf"),
    //     title: "SS_11: Emerging trends in Computational Intelligence to solve Real-World Problems",
    //     organisers: [
    //         "Dr.Archana Purwar, Noida, India", "Dr Indu Chawla, Noida, India"
    //     ],
    //     spname: "SS 011.pdf"
    // }, 
    // {
    //     anchor: require("./SS-012.pdf"),
    //     title: "SS_12: Paradigms of Data Analytics, AI, and Sustainable Development",
    //     organisers: [
    //         "Dr. Arti Jain, Noida, India", "Dr. Dileep Kumar Yadav, Greater Noida, India"
    //     ],
    //     spname: "SS 012.pdf"
    // }, {
    //     anchor: require("./SS-013.pdf"),
    //     title: "SS_13: Intelligent Vision Systems and Edge Computing for Image Sensor Communications",
    //     organisers: [
    //         "Dr. A. Suresh, Chennai, India",
    //     ],
    //     spname: "SS 013.pdf"
    // }, {
    //     anchor: require("./SS-014.pdf"),
    //     title: "SS_14: Intelligent Vision and Computing",
    //     organisers: [
    //         "Dr. Naeem Ahmad, Raipur, India", "Dr. Deepak Singh, Raipur, India"
    //     ],
    //     spname: "SS 014.pdf"
    // }, {
    //     anchor: require("./SS-015.pdf"),
    //     title: "SS_15: Emerging Trends in Information Technology & Biosciences",
    //     organisers: [
    //         "Dr. Sushma Jaiswal, Bilaspur, India",
    //     ],
    //     spname: "SS 015.pdf"
    // }, {
    //     anchor: require("./SS-016.pdf"),
    //     title: "SS_16: Communication & Networking",
    //     organisers: [
    //         "Anvesha Katti, India",
    //     ],
    //     spname: "SS 016.pdf"
    // }, {
    //     anchor: require("./SS-017.pdf"),
    //     title: "SS_17: Machine Learning and deep learning applied to complex problems in computer science",
    //     organisers: [
    //         "Dr. Rachna Jain, New Delhi, India", "Dr. Preeti Nagrath, New Delhi, India"
    //     ],
    //     spname: "SS 017.pdf"
    // }, {
    //     anchor: require("./SS-018.pdf"),
    //     title: "SS_18: AI & ML based Image processing applications",
    //     organisers: [
    //         "Dr. Ritu Gupta, New Delhi, India", "Dr. Abhilasha Singh, Delhi, India"
    //     ],
    //     spname: "SS 018.pdf"
    // }, {
    //     anchor: require("./SS-019.pdf"),
    //     title: "SS_19: Intelligent System with Wireless Communication, Big Data Analytics and Quantum Computing.",
    //     organisers: [
    //         "Dr. Gurpreet Singh, Punjab, India",
    //         "Dr. Amanpreet Kaur, Punjab, India",
    //         "Dr. Aashdeep Singh, Punjab, India",
    //         "Dr. Gurbakash Phonsa, Punjab, India",
    //         "Dr. Sudhanshu Prakash Tiwari, Punjab, India",
    //     ],
    //     spname: "SS 019.pdf"
    // }, {
    //     anchor: require("./SS-020.pdf"),
    //     title: "SS_20: Recent Advances in Intelligent Systems and Communication & Machine Learning",
    //     organisers: [
    //         "Dr. Vikash Yadav, Uttar Pradesh, India", "Dr. Vimal Kumar, Uttar Pradesh, India"
    //     ],
    //     spname: "SS 020.pdf"
    // },{
    //     anchor: require("./SS-021.pdf"),
    //     title: "SS_21: AI & Deep Learning based Smart Healthcare Systems and other Applications",
    //     organisers: [
    //         "Dr. Ritu Chauhan Associate Professor, India", "Dr. Harleen Kaur, New Delhi, India"
    //     ],
    //     spname: "SS 021.pdf"
    // },{
    //     anchor: require("./SS-022.pdf"),
    //     title: "SS_22: Privacy, Secure, and Enabling Trustworthiness using Data Analytics",
    //     organisers: [
    //         "Dr. Mohammad Zunnun Khan, Kingdom of Saudi Arabia", 
    //     ],
    //     spname: "SS 022.pdf"
    // },{
    //     anchor: require("./SS-023.pdf"),
    //     title: "SS_23: Innovative Techniques and Emerging trends in the Healthcare industry using new-age Technologies",
    //     organisers: [
    //         "Dr. Rajat Bhardwaj, Bangalore, India", 
    //         "Dr. Chandramma. R., Bangalore, India",
    //         "Dr Amanpreet Kaur, Punjab, India"
    //     ],
    //     spname: "SS 023.pdf"
    // },{
    //     anchor: require("./SS-024.pdf"),
    //     title: "SS_24: Application of AI and Deep learning in the diagnosis of diseases",
    //     organisers: [
    //         "Dr. Bhagyashree S R, India",             
    //     ],
    //     spname: "SS 024.pdf"
    // },{
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
