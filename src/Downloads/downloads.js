import React from "react";
import style from "../header.module.css";
import Button from 'react-bootstrap/Button';
import Date from "../Date";

const Downloads = () => {
    return (
        <div>
            <h2 class={
                style.abtHeader
            }>Downloads</h2>
            <hr/>
            <div className={
                style.flex
            }>
                <div className={
                    style.dCont
                }>
                    <div style={
                        {width: "50vw"}
                    }>
                        <Button className={
                            style.downloadBadges
                        } href={require("./docs/ManuscriptguidelinesforEnglishbooks.pdf")}
                        target="_blank">Manuscript Guidelines
                            <img src={
                                    require('./docs/icon.png')
                                }
                                className={
                                    style.icon
                            }></img>
                        </Button>
                        <Button variant="primary"
                            className={
                                style.downloadBadges
                        }
                        href={require("./docs/Checklist.pdf")}
                        target="_blank"
                        >Checklist
                            <img src={
                                    require('./docs/icon.png')
                                }
                                className={
                                    style.icon
                            }></img>
                        </Button>
                        <Button variant="primary"
                            className={
                                style.downloadBadges
                        }
                        href={require("./docs/Session_Proposal_Template.docx")}
                        target="_blank"
                        >Special Session Proposal Template
                            <img src={
                                    require('./docs/icon.png')
                                }
                                className={
                                    style.icon
                            }></img>
                        </Button>
                    </div>

                    <div style={
                        {width: "50vw"}
                    }>
                        <Button variant="primary"
                            className={
                                style.downloadBadges
                        }
                        href={require("./docs/ICICC_Brochure.pdf")}
                        target="_blank"
                        >Icicc Brochure
                            <img src={
                                    require('./docs/icon.png')
                                }
                                className={
                                    style.icon
                            }></img>
                        </Button>
                        <Button variant="primary"
                            className={
                                style.downloadBadges
                        }
                        href={require("./docs/sponsorship_Proposal.pdf")}
                        target="_blank"
                        >Sponsorship Proposal
                            <img src={
                                    require('./docs/icon.png')
                                }
                                className={
                                    style.icon
                            }></img>
                        </Button>
                        <Button variant="primary"
                            className={
                                style.downloadBadges
                        }
                        href={require("./docs/Special_Session_Proposal_Template.docx")}
                        target="_blank"
                        >Special Session Proposal Template
                            <img src={
                                    require('./docs/icon.png')
                                }
                                className={
                                    style.icon
                            }></img>
                        </Button>
                    </div>

                </div>
                <Date/>
            </div>
        </div>

    );
};

export default Downloads;
