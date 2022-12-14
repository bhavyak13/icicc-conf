import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";


const spdata = [
    {
        anchor: require("./SS-001.pdf"),
        title: "Emerging Intelligent Computing Techniques and their Applications (EICTA)",
        organisers: [
            "Dr. Nitish Pathak, New Delhi, India", "Dr. Neelam Sharma, New Delhi, India",

        ],
        spname: "SS 001.pdf"
    },
    {
        anchor: require("./SS-002.pdf"),
        title: "SS_02: Recent Trends in Machine Learning and Information System",
        organisers: [
            "Dr. Abhishek Kumar Mishra, Moradabad, India ", "Dr. Rakes Kumar Yadav, Lucknow, India"
        ],
        spname: "SS 002.pdf"
    },
    {
        anchor: require("./SS-003.pdf"),
        title: "SS_03: Recent Advancement in Integration of Renewable Energy to the Grids: Techniques, Challenges, Applications",
        organisers: [
            "Abhishek Vishnoi, Kanpur, India", "Vikas Verma, Delhi, India"
        ],
        spname: "SS 003.pdf"
    },
    {
        anchor: require("./SS-004.pdf"),
        title: "SS_04: AIoT for Images: Application, Challenges and Future Scope",
        organisers: [
            "Dr. Pooja Singh, India", "Dr. Usha Chauhan, India"
        ],
        spname: "SS 004.pdf"
    }, {
        anchor: require("./SS-005.pdf"),
        title: "SS_05: Artificial Intelligence and Allied Domain – A Key to the Emerging Technology",
        organisers: [
            "Dr. Uzzal Sharma, India",
        ],
        spname: "SS 005.pdf"
    }, {
        anchor: require("./SS-006.pdf"),
        title: "SS_06: Emerging Trends, Issues, and Challenges in Artificial Intelligence, Internet of Things and Cloud Computing",
        organisers: [
            "Dr.S.Balakrishnan, Coimbatore, India",
        ],
        spname: "SS 006.pdf"
    }, {
        anchor: require("./SS-007.pdf"),
        title: "SS_07: Emerging Trends, Challenges and Applications in Data Intelligence and Networking",
        organisers: [
            "Dr. Imran Khan, Kanpur, India", "Dr Asif Khan, Lucknow, India", "Dr. Ahmad Neyaz Khan, Lucknow, India"
        ],
        spname: "SS 007.pdf"
    }, {
        anchor: require("./SS-008.pdf"),
        title: "SS_08: Advancements in Wireless Communication Systems",
        organisers: [
            "Ravi Shankar, Telangana, India", "Usha Desai, Telangana, India", "Sumit Gupta, Telangana, India", "S. N. Panda, Punjab, India"
        ],
        spname: "SS 008.pdf"
    }, {
        anchor: require("./SS-009.pdf"),
        title: "SS_09: Blockchain-based Networks and their Applications",
        organisers: [
            "Dr. Anuj Kr. Singh, Roorkee, India", "Dr. Ankit Garg, Roorkee, India"
        ],
        spname: "SS 009.pdf"
    }, {
        anchor: require("./SS-010.pdf"),
        title: "SS_10: Recent Advances in Natural Language Processing and Computer Vision Techniques",
        organisers: [
            "Dr. Mohd Zeeshan Ansari, India", "Dr. Faiyaz Ahmad, India"
        ],
        spname: "SS 010.pdf"
    }, {
        anchor: require("./SS-011.pdf"),
        title: "SS_11: Emerging trends in Computational Intelligence to solve Real-World Problems",
        organisers: [
            "Dr.Archana Purwar, Noida, India", "Dr Indu Chawla, Noida, India"
        ],
        spname: "SS 011.pdf"
    }, {
        anchor: require("./SS-012.pdf"),
        title: "SS_12: Paradigms of Data Analytics, AI, and Sustainable Development",
        organisers: [
            "Dr. Arti Jain, Noida, India", "Dr. Dileep Kumar Yadav, Greater Noida, India"
        ],
        spname: "SS 012.pdf"
    }, {
        anchor: require("./SS-013.pdf"),
        title: "SS_13: Intelligent Vision Systems and Edge Computing for Image Sensor Communications",
        organisers: [
            "Dr. A. Suresh, Chennai, India",
        ],
        spname: "SS 013.pdf"
    }, {
        anchor: require("./SS-014.pdf"),
        title: "SS_14: Intelligent Vision and Computing",
        organisers: [
            "Dr. Naeem Ahmad, Raipur, India", "Dr. Deepak Singh, Raipur, India"
        ],
        spname: "SS 014.pdf"
    }, {
        anchor: require("./SS-015.pdf"),
        title: "SS_15: Emerging Trends in Information Technology & Biosciences",
        organisers: [
            "Dr. Sushma Jaiswal, Bilaspur, India",
        ],
        spname: "SS 015.pdf"
    }, {
        anchor: require("./SS-016.pdf"),
        title: "SS_16: Communication & Networking",
        organisers: [
            "Anvesha Katti, India",
        ],
        spname: "SS 016.pdf"
    }, {
        anchor: require("./SS-017.pdf"),
        title: "SS_17: Machine Learning and deep learning applied to complex problems in computer science",
        organisers: [
            "Dr. Rachna Jain, New Delhi, India", "Dr. Preeti Nagrath, New Delhi, India"
        ],
        spname: "SS 017.pdf"
    }, {
        anchor: require("./SS-018.pdf"),
        title: "SS_18: AI & ML based Image processing applications",
        organisers: [
            "Dr. Ritu Gupta, New Delhi, India", "Dr. Abhilasha Singh, Delhi, India"
        ],
        spname: "SS 018.pdf"
    }, {
        anchor: require("./SS-019.pdf"),
        title: "SS_19: Intelligent System with Wireless Communication, Big Data Analytics and Quantum Computing.",
        organisers: [
            "Dr. Gurpreet Singh, Punjab, India",
            "Dr. Amanpreet Kaur, Punjab, India",
            "Dr. Aashdeep Singh, Punjab, India",
            "Dr. Gurbakash Phonsa, Punjab, India",
            "Dr. Sudhanshu Prakash Tiwari, Punjab, India",
        ],
        spname: "SS 019.pdf"
    }, {
        anchor: require("./SS-020.pdf"),
        title: "SS_20: Recent Advances in Intelligent Systems and Communication & Machine Learning",
        organisers: [
            "Dr. Vikash Yadav, Uttar Pradesh, India", "Dr. Vimal Kumar, Uttar Pradesh, India"
        ],
        spname: "SS 020.pdf"
    },{
        anchor: require("./SS-021.pdf"),
        title: "SS_21: AI & Deep Learning based Smart Healthcare Systems and other Applications",
        organisers: [
            "Dr. Ritu Chauhan Associate Professor, India", "Dr. Harleen Kaur, New Delhi, India"
        ],
        spname: "SS 021.pdf"
    },{
        anchor: require("./SS-022.pdf"),
        title: "SS_22: Privacy, Secure, and Enabling Trustworthiness using Data Analytics",
        organisers: [
            "Dr. Mohammad Zunnun Khan, Kingdom of Saudi Arabia", 
        ],
        spname: "SS 022.pdf"
    },{
        anchor: require("./SS-023.pdf"),
        title: "SS_23: Innovative Techniques and Emerging trends in the Healthcare industry using new-age Technologies",
        organisers: [
            "Dr. Rajat Bhardwaj, Bangalore, India", 
            "Dr. Chandramma. R., Bangalore, India",
            "Dr Amanpreet Kaur, Punjab, India"
        ],
        spname: "SS 023.pdf"
    },{
        anchor: require("./SS-024.pdf"),
        title: "SS_24: Application of AI and Deep learning in the diagnosis of diseases",
        organisers: [
            "Dr. Bhagyashree S R, India",             
        ],
        spname: "SS 024.pdf"
    },{
        anchor: require("./SS-025.pdf"),
        title: "SS_25:  Role of ML and DL Techniques in Healthcare: Security, Privacy & Open Challenges ",
        organisers: [
            "Dr Neha Sharma, Rajpura, Punjab, India",   
            "Dr Deepika Kumar, New Delhi, India"          
        ],
        spname: "SS 025.pdf"
    },{
        anchor: require("./SS-026.pdf"),
        title: "SS_26:  Security and Privacy in the Cloud ",
        organisers: [
            "Prof. Naren.J, Bangalore, India",   
            "Dr. Suchitra. R. Nair, Bangalore, India"          
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
