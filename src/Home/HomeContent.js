import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from '../Date'
import Button from 'react-bootstrap/Button';


const HomeCont = () => {
    const items = [
        {
            key: 'Citations',
            val: '2494'
        },
        {
            key: 'H - Index',
            val: '20'
        },
        {
            key: 'H5 - Index',
            val: '20'
        },
        {
            key: 'No.of Published Papers in Proceedings',
            val: '1553'
        }, {
            key: 'No.of Keynotes',
            val: '64'
        }, {
            key: 'No.of Workshops',
            val: '13'
        }, {
            key: 'Acceptance Rate',
            val: '23%'
        }, {
            key: 'No.of Participating Countries',
            val: '49'
        }, {
            key: 'No.of Volumes Published',
            val: '15'
        }, {
            key: 'No.of Published Papers in Extended Journals(Scopus)',
            val: '103'
        }, {
            key: 'No.of Published Papers in Extended Journals(SCIE)',
            val: '59'
        }, {
            key: 'Total No.of Participation',
            val: '3990'
        },
    ]

    return (
        <div>
            <Alert key='primary' variant='primary'
                className={
                    style.alert
            }>
                <a 
                href="https://scholar.google.com/citations?hl=en&user=fFvhHUAAAAAJ" target="_blank"
                    className={
                        style.alertContent
                }>A FLAGSHIP CONFERENCE : ICICC - 2024</a>


            </Alert>
            <Alert key='primary' variant='primary'
                className={
                    style.alert
            }>
                <a 
                    className={
                        style.alertContent
                } >Online presentation of papers is allowed due to pandemic</a>


            </Alert>
            {/* <div class="alert alert-info" role="alert" >
        <h4 class="alert-heading text-center">  </h4>
      </div> */}
            <div className="btnn">
                <button className={
                    style.paymentBtn
                }>
                    <a 
                    href="https://cmt3.research.microsoft.com/ICICC2024" target="_blank"
                        className={
                            style.links
                        }
                        style={
                            {color: "white"}
                    }>Submit Paper</a>
                </button>
            </div>
            
            {/* TABLE */}
            <div className="cont">
                {
                items.map((item, indx) => (
                    <div className={
                        (indx % 2) ? 'box' : 'box box2'
                    }>
                        <div className={
                            (indx % 2) ? "box_head" : 'blue_clr'
                        }>
                        {
                            item.val
                        }
                        </div>
                        <div className={
                            (indx % 2) ? "box_desc" : 'blue_clr'
                        }>
                            {
                            item.key
                        }</div>
                    </div>
                ))
            } 
            </div>
            
            <br />
         
<br />
            <h3 className={
                style.abtHeader
            }>About Conference</h3>

            <hr/>
            <div className={
                style.flex
            }>
                <div className={
                    style.abtContent
                }>
                    <p>International Conference on Innovative Computing and Communication (ICICC 2024) is organized to bring together innovative scientists, professors, research scholars, students, and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into the real-time application. Overall, the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research. ICICC- 2024 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi. All the accepted papers (after double-blinded peer review) will be published as proceedings of ICICC-2024 in Springer (Proposed).
                    </p>
                    <p>Paper Submission Link :
                    {/* <a href="https://easychair.org/conferences/?conf=icicc2023"> */}
                            {/* Easychair Submission</a> */}
                    </p>

{/* 
                    <h3 className={
                        style.abtHeader
                    }>About Conference</h3> */}


                </div>


                <div className={
                    style.downloads
                }>
                    <h3>Downloads</h3>
                    <marquee direction="up"
                        className={
                            style.marquee
                        }
                        style={
                            {width: '20vw'}
                        }
                        onMouseOver="this.stop()"
                        onMouseOut="this.start()">
                        <a href={
                                require("../Downloads/docs/ManuscriptguidelinesforEnglishbooks.pdf")
                            }
                            target="_blank">Manuscript Guidelines
                        </a>
                        <hr style={
                            {width: '15vw'}
                        }/>
                        <a href={
                                require("../Downloads/docs/Checklist.pdf")
                            }
                            target="_blank">Checklist
                        </a>
                        <hr style={
                            {width: '15vw'}
                        }/>
                        <a href={
                                require("../Downloads/docs/Special_Session_Proposal_Template.docx")
                            }
                            target="_blank">Special Session Proposal Template
                        </a>
                        <hr style={
                            {width: '15vw'}
                        }/>
                        <a href={
                                require("../Downloads/docs/ICICC_Brochure.pdf")
                            }
                            target="_blank">Icicc Brochure
                        </a>
                        <hr style={
                            {width: '15vw'}
                        }/>
                        <a href={
                                require("../Downloads/docs/sponsorship_Proposal.pdf")
                            }
                            target="_blank">Sponsorship Proposal
                        </a>
                        <hr style={
                            {width: '15vw'}
                        }/>

                    </marquee>
                </div>
            </div>

            <div className={
                style.flex
            }>


                <Date/>

                <div className={
                    style.marContainer
                }>
                    <h3>Notices</h3>
                    <marquee direction="up"
                        className={
                            style.marquee
                    }>
                        <p>ICICC - 2024 will be organized by Shaheed Sukhdev College of Business Studies, Delhi university, India, on 16-17 February 2024</p>
                    </marquee>
                </div>
            </div>

        </div>
    );
};

export default HomeCont;
