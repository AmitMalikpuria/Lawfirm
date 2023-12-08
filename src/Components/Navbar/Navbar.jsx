import React from "react";
import style from './Navbar.module.css'
import logo from '../../assets/Logo.png'

function Navbar({children}) {

    return <div className={style.containerfluid}>
        <div className={style.container}>
            <div className={style.wrapper}>
                <img src={logo} alt="logo-img" />
                <div className={style.menu}>
                    <a>Home</a>
                    <a>Attorneys</a>
                    <a>Practice Areas</a>
                    <a>About Us</a>
                </div>
                <button className={style.button}>Contact Now</button>
            </div>
            {children}
        </div>
    </div>;
}

export default Navbar;
