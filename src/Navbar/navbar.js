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
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="/"
                            // to="/icicc-conf"                            
                        >
                            <p className={style.navLink}>Home</p>
                        </NavLink>
                    </Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown" className={style.navDD}>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="about_institute">
                                <p className={style.navLink}>About Institute</p>
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="about_universal_innovators">
                                <p className={style.navLink}>About Universal Innovators</p>
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Papers" id="basic-nav-dropdown" className={style.navDD}>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="call_for_papers"><p className={style.navLink}>Call for Papers</p>
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="paper_submission"><p className={style.navLink}>Paper Submission</p>
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="call_for_special_sessions"><p className={style.navLink}>Call for Special Session</p>
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="call_for_international_workshops"><p className={style.navLink}>Call for International </p>Workshops
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="specialsessions"><p className={style.navLink}>Special Sessions</p></NavLink>
                    </Nav.Link>
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="workshops"><p className={style.navLink}>Workshops</p></NavLink>
                    </Nav.Link>
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="registrations"><p className={style.navLink}>Registration</p></NavLink>
                    </Nav.Link>

                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="sponsorship"><p className={style.navLink}>Sponsorships</p></NavLink>
                    </Nav.Link>

                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="publications"><p className={style.navLink}>Publications</p></NavLink>
                    </Nav.Link>
                    <NavDropdown title="Committee" id="basic-nav-dropdown" className={style.navDD}>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="steercom"><p className={style.navLink}>Steering Committee</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="techcom"><p className={style.navLink}>Technical Program Committee</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="advcom"><p className={style.navLink}>Advisory Committee</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="indexp"><p className={style.navLink}>Industry Experts</p></NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="awards"><p className={style.navLink}>Awards</p></NavLink>
                    </Nav.Link>
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    }>
                        <NavLink className={
                                style.links
                            }
                            to="venue"><p className={style.navLink}>Conference Venue</p></NavLink>
                    </Nav.Link>
                    <Nav.Link onClick={
                        () => setExpanded(false)
                    } >
                        <NavLink className={
                                style.links
                            }
                            to="downloads"><p className={style.navLink}>Downloads</p></NavLink>
                    </Nav.Link>
                    <NavDropdown title="Previous Conferences" id="basic-nav-dropdown" className={style.navDD}>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc22"><p className={style.navLink}>ICICC 2022</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc21"><p className={style.navLink}>ICICC 2021</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc20"><p className={style.navLink}>ICICC 2020</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc19"><p className={style.navLink}>ICICC 2019</p></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={
                            () => setExpanded(false)
                        }>
                            <NavLink className={
                                    style.links
                                }
                                to="icicc18"><p className={style.navLink}>ICICC 2018</p></NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default CommonNavbar;
