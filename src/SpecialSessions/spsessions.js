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
//      {
//         anchor: require("./SS-005.pdf"),
//         title: "SS_05: Research Trends in Data Science, IoT and Computational Intelligence in 6G Communications",
//         organisers: [
//             "Dr. Rajendra Kumar, Department of Computer Science & Engineering, Sharda University, India",
//             "Dr. Shruti Aggarwal, Department of Computer Science and Engineering, Thapar University, Patiala, India"
//         ],
//         spname: "SS 005.pdf"
//     }, 
//     {
//         anchor: require("./SS-006.pdf"),
//         title: "SS_06: Innovative Research Trends in Business Intelligence and Analytics",
//         organisers: [
//             "Dr. Abha Kiran Rajpoot, Department of CSE(AI&ML), KIET Group of Institutions, Ghaziabad, India",
//             "Dr. Gaurav Agrawal, Department of CSE(AI), KIET Group of Institutions, Ghaziabad, India",
//             "Mr. Anurag Gupta, Department of CSE(AI), KIET Group of Institutions, Ghaziabad, India"
//         ],
//         spname: "SS 006.pdf"
//     }, 
//     {
//         anchor: require("./SS-007.pdf"),
//         title: "SS_07: Artificial Intelligence for Sustainable Computing and Business Practices",
//         organisers: [
//             "Dr. Arti Jain, Jaypee Institute of Information Technology, Noida, Uttar Pradesh, India",
//             "Prof. Divakar Yadav, School of Computer and Information Sciences, IGNOU, New Delhi, India",
//             "Prof. Santoshi Sengupta, Graphic Era Hill University, Bhimtal, Uttarakhand, India"
//         ],
//         spname: "SS 007.pdf"
//     }, 
//     {
//         anchor: require("./SS-008.pdf"),
//         title: "SS_08: Multi-Objective Optimization: Advancements and Future Prospects",
//         organisers: [
//             "Dr. Aditya Gupta, Manipal University Jaipur, India",
//             "Dr. Vibha Jain, Manipal University Jaipur, India",
//             "Dr. Gunjan, National Institute of Technology, Delhi, India"
//         ],
//         spname: "SS 008.pdf"
//     }, {
//         anchor: require("./SS-009.pdf"),
//         title: "SS_09: Contemporary Innovations in Data Sciences, Internet of Things (IoT) and Wireless Communication",
//         organisers: [
//             "Dr. Gurpreet Singh, Punjab Institute of Technology, Rajpura (MRSPTU, Bathinda), Punjab",
//             "Dr. Amanpreet Kaur, CUIET, Chitkara University, Rajpura, Punjab",
//             "Dr. Aashdeep Singh, Punjab Institute of Technology, Rajpura (MRSPTU, Bathinda), Punjab",
//             "Dr. Rohan Gupta, Chandigarh University, Gharaun, Mohali, Punjab"
//         ],
//         spname: "SS 009.pdf"
//     }, 
//     {
//         anchor: require("./SS-010.pdf"),
//         title: "SS_10:Recent Advances in Intelligent Systems and Communication & Machine Learning",
//         organisers: [
//             "Dr. Vikash Yadav, Government Polytechnic Bighapur Unnao, Uttar Pradesh, India, vikas.yadav.cs@gmail.com",
//             "Dr. Chuan-Ming Liu, National Taipei University of Technology (NTUT),Taipei,Taiwan",
//             "Dr. Ajimuse, Muyiwa Sunday, Federal university Oye Ekiti, Nigeria"
//         ],
//         spname: "SS 010.pdf"
//     }, 
//     {
//         anchor: require("./SS-011.pdf"),
//         title: "SS_11: Intelligent Applications and Contemporary Business Prospects for Autonomous Vehicles",
//         organisers: [
//             "Dr Suganthi Evangeline, Assistant Professor (Sl. Gr), Consultant in Embedded and IoT Research,Department of Electronics and Communication Engineering, Sri Eshwar College of Engineering, Coimbatore, India",
//             "Dr Emmanuel Joy, Assistant Professor, School of Computer Science and Technology,Karunya Institute of Technology and Sciences, Coimbatore, India"
//         ],
//         spname: "SS 011.pdf"
//     }, 
//     {
//         anchor: require("./SS-012.pdf"),
//         title: "SS_12: Antennas and Embedded Systems",
//         organisers: [
//             "Hamzah M. Marhoon, Al-Nahrain University, College of Information Engineering, Republic of Iraq"
//         ],
//         spname: "SS 012.pdf"
//     }, {
//         anchor: require("./SS-013.pdf"),
//         title: "SS_13: AI and Machine Learning for Blockchain, Social network analysis, and Computational Intelligence Optimization",
//         organisers: [
//             "Dr. Umesh Gupta, Associate Professor, SR University, Warangal, India",
//         ],
//         spname: "SS 013.pdf"
//     }, 
//     {
//         anchor: require("./SS-014.pdf"),
//         title: "SS_14: Interpretable Machine Learning and Model Explainability",
//         organisers: [
//             "Dr. Uzzal Sharma, Associate Professor, Birangana Sati Sadhani Rajyik Viswavidyalaya, India"
//         ],
//         spname: "SS 014.pdf"
//     },
//      {
//         anchor: require("./SS-015.pdf"),
//         title: "SS_15: Data Driven Intelligence for Future Generation Computing Systems",
//         organisers: [
//             "Dr. Akash Sinha, School of Computer Science and Engineering,            Vellore Institute of Technology, Vellore, India",
//             "Dr. Hiteshwar Kumar Azad, School of Computer Science and Engineering,    Vellore Institute of Technology, Vellore, India",
//         ],
//         spname: "SS 015.pdf"
//     }, 
//     {
//         anchor: require("./SS-016.pdf"),
//         title: "SS_16: [BlockChain and Artificial Intelligence]",
//         organisers: [
//             "Dr. Anshu Khurana, Maharaja Agrasen Institute of Technology, Rohini, India",
//             "Dr. Deepika Bansal, Maharaja Agrasen Institute of Technology, Rohini, India"

//         ],
//         spname: "SS 016.pdf"
//     },
//      {
//         anchor: require("./SS-017.pdf"),
//         title: "SS_17: Computational Optimization and AI in Civil Engineering",
//         organisers: [
//             "Prof. Dr. Gebrail BEKDAŞ, Istanbul University- Cerrahpaşa, Turkey",
//             "Prof. Dr. Sinan Melih NİGDELİ, Istanbul University- Cerrahpaşa, Turkey"
//         ],
//         spname: "SS 017.pdf"
//     }, {
//         anchor: require("./SS-018.pdf"),
//         title: "SS_18: Emerging Trends, Challenges and Applications in Data Intelligence and Biomedical Sciences",
//         organisers: [
//             "Dr. Imran Khan, Assistant Professor, Harcourt Butler Technical University (H.B.T.U.) Kanpur, Uttar Pradesh",            
//             "Dr Asif Khan, Assistant Professor, Integral University, Lucknow",            
//             "Dr. Ahmad Neyaz Khan, Assistant Professor,Integral University, Lucknow"
//         ],
//         spname: "SS 018.pdf"
//     },
//      {
//         anchor: require("./SS-019.pdf"),
//         title: "SS_19:The Future of AI: Emerging Innovative Computing Techniques and Applications",
//         organisers: [
//             "Dr. Jyoti Khurana, Maharaja Surajmal Institute of Technology (MSIT), Guru Gobind Singh Indraprastha University (GGSIPU), New-Delhi, India",
//             "Dr. Pooja Kherwa, Maharaja Surajmal Institute of Technology (MSIT), Guru Gobind Singh Indraprastha University (GGSIPU), New-Delhi, India",
//             "Mr. Akshay Singh, Maharaja Surajmal Institute of Technology (MSIT), Guru Gobind Singh Indraprastha University (GGSIPU), New-Delhi, India",
//         ],
//         spname: "SS 019.pdf"
//     },
//     {
//         anchor: require("./SS-020.pdf"),
//         title: "SS_20: Smart Intelligent Computing In Advanced Sectors (SICAS)",
//         organisers: [
//             "Dr.Srikanta Kumar Mohapatra"
//         ],
//         spname: "SS 020.pdf"
//     },
//     {
//         anchor: require("./SS-021.pdf"),
//         title: "SS_21: SPECIAL SESSION ON BIG DATA ANALYTICS, DATA SCIENCES AND NEURAL NETWORKS",
//         organisers: [
//             "Dr. Preeti Nagrath, Bharati Vidyapeeth’s College of Engineering, New Delhi",
//             "Dr. Rachna Jain, Bhagwan Parshuram Institute of Technology, New Delhi"
//         ],
//         spname: "SS 021.pdf"
//     },
//     {
//         anchor: require("./SS-022.pdf"),
//         title: "SS_22: Harvesting the Future: Advancements in innovative computing and communication for Agricultural Applications",
//         organisers: [
//             "Stefano Rinaldi, University of Brescia – Department of Information Engineering, Italy", 
//         ],
//         spname: "SS 022.pdf"
//     },
//     {
//         anchor: require("./SS-023.pdf"),
//         title: "SS_23: Computer Networking, Security & Data Analytics",
//         organisers: [
//             "Prof Bal Virdee, Senior Professor & Head of Communications Technology Research Centre Chair & Executive Member of IET Technical Professional Network Chair of Judges - The IET Excellence & Innovation Awards,2023 London Metropolitan University, UK",
//             "Mrs Richa Sharma, Senior Lecturer in Computer Networking,London Metropolitan University, UK",
//             "Dr Sandra Fernando,Senior Lecturer in Computing,London Metropolitan University, UK"
            
//         ],
//         spname: "SS 023.pdf"
//     },
//     {
//         anchor: require("./SS-024.pdf"),
//         title: "SS_24: System Design & ML/AI for Secure IoE in Cloud Era",
//         organisers: [
//             "Dr Manoj Sharma, Associate Professor, BVCOE ND, Afflt. GGSIPU, New Delhi, India",
//             "Dr Kanchan Sharma, Assistant Professor, IGDTUW, Delhi, India",
//             "Dr Nitin Sharma, Assistant Professor, MAIT, ND",
//             "Dr Manoj Kumar, Assistant Professor, , USAR, GGSIPU, East Delhi Campus, ND",             
//         ],
//         spname: "SS 024.pdf"
//     },
    
// {
//         anchor: require("./Spl_Session_ICICC_Delhi.pdf"),
//         title: "SS_25:  Recent Trends in Computer Communication, Networking and Technology ",
//         organisers: [
//             "Dr. Kavitha C,Prof. and Head-Department of Computer Science and Engineering, Dayananda Sagar Academy of Technology and Management,        Bangaluru, Karnataka-INDIA     ",   
                
//         ],
//         spname: "SS 025.pdf"
//     },
//     {
//         anchor: require("./SS-026.pdf"),
//         title: "SS_26:  Emerging trends and technologies in Artificial intelligence ",
//         organisers: [
//             "Dr. Rajakumar Arul, Vellore Institute of Technology, Chennai, India",   
//             "Dr. Kalaipriyan, T., Vellore Institute of Technology, Chennai, India"      ,
//             "Dr. Ali Kashif Bashir, Professor, Computer Networks and Cybersecurity, Manchester Metropolitan University, United Kingdom"    
//         ],
//         spname: "SS 026.pdf"
//     },
    
   

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
