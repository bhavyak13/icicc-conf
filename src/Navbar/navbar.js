import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import style from "../header.module.css";
import {useState} from 'react';


function CommonNavbar() {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar bg="light" variant="light" expand="lg" className="sticky-top"
            expanded={expanded}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"
                onClick={
                    () => setExpanded(expanded ? false : "expanded")
                }/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"
                    style={
                        {
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-around',
                            fontSize: '15px',
                            padding: '20'
                        }
                }>

                    <NavLink className={
                            style.links
                        }
                        to="/"
                        onClick={
                            () => setExpanded(false)
                        }
                        // to="/icicc-conf"
                    >
                        <p className={
                            style.navLink
                        }>Home</p>
                    </NavLink>

                    <NavDropdown title="About" id="basic-nav-dropdown"
                        className={
                            style.navDD
                    }>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="about_institute">
                                About Institute
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="about_universal_innovators">
                                About Universal Innovators
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Papers" id="basic-nav-dropdown"
                        className={
                            style.navDD
                    }>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="call_for_papers">
                                Call for Papers
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="paper_submission">
                                Paper Submission
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="call_for_special_sessions">
                                Call for Special Session
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="call_for_international_workshops">
                                Call for International
                                Workshops
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavLink className={
                            style.links
                        }
                        to="specialsessions"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Special Sessions</p>
                    </NavLink>


                    <NavLink className={
                            style.links
                        }
                        to="workshops"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Workshops</p>
                    </NavLink>


                    <NavLink className={
                            style.links
                        }
                        to="registrations"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Registration</p>
                    </NavLink>


                    <NavLink className={
                            style.links
                        }
                        to="sponsorship"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Sponsorships</p>
                    </NavLink>


                    <NavLink className={
                            style.links
                        }
                        to="publications"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Publications</p>
                    </NavLink>

                    <NavDropdown title="Committee" id="basic-nav-dropdown"
                        className={
                            style.navDD
                    }>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="steercom">
                                Steering Committee
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="techcom">
                                Technical Program Committee
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="advcom">
                                Advisory Committee
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="indexp">
                                Industry Experts
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavLink className={
                            style.links
                        }
                        to="awards"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Awards</p>
                    </NavLink>


                    <NavLink className={
                            style.links
                        }
                        to="venue"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Conference Venue</p>
                    </NavLink>


                    <NavLink className={
                            style.links
                        }
                        to="downloads"
                        onClick={
                            () => setExpanded(false)
                    }>
                        <p className={
                            style.navLink
                        }>Downloads</p>
                    </NavLink>

                    <NavDropdown title="Previous Conferences" id="basic-nav-dropdown"
                        className={
                            style.navDD
                    }>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="/icicc23">
                                ICICC 2023
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="/icicc22">
                                ICICC 2022
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc21">
                                ICICC 2021
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc20">
                                ICICC 2020
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc19">
                                ICICC 2019
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc18">
                                ICICC 2018
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default CommonNavbar;
