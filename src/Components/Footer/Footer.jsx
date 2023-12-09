import React from "react";
import styles from './Footer.module.css'
import logo from '../../assets/Logo.png'
import socialMediaIcons from '../../assets/Group 90.png'

function Footer() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img src={logo} alt="logo-img" />
                    <div className={styles.menu}>
                        <a>Home</a>
                        <a>Attorneys</a>
                        <a>Practice Areas</a>
                        <a>About Us</a>
                    </div>
                    <img src={socialMediaIcons}/>
                    {/* <button className={styles.button}>Contact Now</button> */}
                </div>
                <div className={styles.privacypolicy}>
                    <p>© 2020 Acme. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>);
}

export default Footer;
