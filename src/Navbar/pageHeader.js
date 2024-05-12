import React from "react";
import style from "../header.module.css";
// import '../header.module.css';

const Header = () => {
    return (
        <div  >
            <div className={
                style.headerCont
            }>
            
            
            <div className={style.logoCont}>
            <img src={
                        require('./images/icicc.jpg')
                    }
                    style={{"width":"22rem","height":"10rem","margin":"auto"}}></img>
                </div>
                
                <div>
                    <h1 className={
                        style.icicc
                    }>8th INTERNATIONAL CONFERENCE ON INNOVATIVE COMPUTING AND COMMUNICATION<br/>
                        (ICICC 2025)</h1>
                    <br/>
                    <h2 className={
                        style.organiser
                    }>ORGANISED BY : SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, UNIVERSITY OF DELHI, NEW DELHI
                    IN ASSOCIATION UNIVERSITY OF VALLADOLID SPAIN</h2>
                    <h2 className={
                        style.dates
                    }>16-17th FEBRUARY 2025</h2>
                </div>
                <div className={style.mobile}>
                <div className={style.logoCont}>
                <img src={
                        require('./images/logo.png')
                    }
                    className={
                        style.headerLogo
                }></img>
                <img src={
                        require('./images/logospain.png')
                    }
                    className={
                        style.headerLogo
                }></img>
                </div>
                <div className={style.logoCont}>
                
                <img src={
                        require('./images/Springer.png')
                    }
                    className={
                        style.headerLogo
                }></img>
                </div>

                
                </div>
            </div>

        </div>
    );
};

export default Header;
