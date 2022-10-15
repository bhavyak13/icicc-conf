import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import style from "../header.module.css";

function CommonNavbar() {

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ display: 'flex', width: '100%', justifyContent: 'space-around', fontSize: '15px', padding: '20' }}>
          <Nav.Link>
            <NavLink className={style.links}
              to="/" 
            >
              Home
            </NavLink>
          </Nav.Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item >
              <NavLink className={style.links}
                to="about_institute"
              >
                About Institute
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <NavLink className={style.links}
                to="about_universal_innovators"
              >
                About Universal Innovators
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Papers" id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink className={style.links}
                to="call_for_papers"
              >Call for Papers
              </NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink className={style.links}
                to="paper_submission"
              >Paper Submission
              </NavLink></NavDropdown.Item>
            <NavDropdown.Item > <NavLink className={style.links}
                to="call_for_special_sessions"
              >Call for Special Session
              </NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink className={style.links}
                to="call_for_international_workshops"
              >Call for International Workshops
              </NavLink></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><NavLink className={style.links} to="specialsessions">Special Sessions</NavLink></Nav.Link>
          <Nav.Link><NavLink className={style.links} to="workshops">Workshops</NavLink></Nav.Link>
          <Nav.Link><NavLink className={style.links} to="registrations">Registration</NavLink></Nav.Link>

          <Nav.Link > <NavLink className={style.links} to="sponsorship">Sponsorships</NavLink></Nav.Link>

          <Nav.Link><NavLink className={style.links} to="publications">Publications</NavLink></Nav.Link>
          <NavDropdown title="Committee" id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink className={style.links} to="steercom">Steering Committee</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink className={style.links} to="techcom">Technical Program Committee</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink className={style.links} to="advcom">Advisory Committee</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink className={style.links} to="indexp">Industry Experts</NavLink></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><NavLink className={style.links} to="awards">Awards</NavLink></Nav.Link>
          <Nav.Link><NavLink className={style.links} to="venue">Conference Venue</NavLink></Nav.Link>
          <Nav.Link><NavLink className={style.links} to="downloads">Downloads</NavLink></Nav.Link>
          <NavDropdown title="Previous Conferences" id="basic-nav-dropdown">
            <NavDropdown.Item>ICICC 2022</NavDropdown.Item>
            <NavDropdown.Item>ICICC 2021</NavDropdown.Item>
            <NavDropdown.Item>ICICC 2020</NavDropdown.Item>
            <NavDropdown.Item>ICICC 2019</NavDropdown.Item>
            <NavDropdown.Item>ICICC 2018</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default CommonNavbar;
