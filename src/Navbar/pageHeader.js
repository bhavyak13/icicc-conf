import React from "react";
import style from "../header.module.css";
// import '../header.module.css';

const Header = () => {
    return (
        <div  >
            <div className={
                style.headerCont
            }><div className={style.logoCont}>
                <img src={
                        require('./images/logo.png')
                    }
                    className={
                        style.headerLogo
                }></img>
                <img src={
                        require('./images/logo2.jpeg')
                    }
                    className={
                        style.headerLogo
                }></img>
                </div>
                <div>
                    <h1 className={
                        style.icicc
                    }>6th INTERNATIONAL CONFERENCE ON INNOVATIVE COMPUTING AND COMMUNICATION<br/>
                        (ICICC 2023)</h1>
                    <br/>
                    <h2 className={
                        style.organiser
                    }>ORGANISED BY : SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, UNIVERSITY OF DELHI, NEW DELHI
                    IN ASSOCIATION WITH
                    NATIONAL INSTITUTE OF TECHNOLOGY,PATNA & UNIVERSITY OF VALLADOLID SPAIN</h2>
                    <h2 className={
                        style.dates
                    }>17-18th FEBRUARY 2023</h2>
                </div>
                <div className={style.logoCont}>
                <img src={
                        require('./images/logospain.png')
                    }
                    className={
                        style.headerLogo
                }></img>
                <img src={
                        require('./images/Springer.png')
                    }
                    className={
                        style.headerLogo
                }></img>
                </div>
            </div>

        </div>
    );
};

export default Header;
