import React from "react";
import styles from './Newsletter.module.css'

function Newsletter() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>

                <p className={styles.newsletter}> Subscribe our Newsletter</p>

                <div className={styles.form}>
                    <input type="text" className={styles.textbox1} placeholder="Name" />
                    <input type="text" className={styles.textbox2} placeholder="Enter your email" />
                    <button className={styles.button}>SEND</button>
                </div>

            </div>
        </div>);
}

export default Newsletter;
