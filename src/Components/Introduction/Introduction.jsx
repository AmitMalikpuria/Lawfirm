import React from "react";
import styles from './Introduction.module.css'
import LineImg from '../../assets/Line.png'

function Introduction() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Let's Introduce Yourself</h2>
                </div>

                <img src={LineImg} alt="line-png"  />
                <div style={{ width: "33%" }} className={styles.Criminalchild2}>
                    <h2 className={styles.CriminalTitle}>Criminal Lawyer</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
                </div>
            </div>
        </div>);
}

export default Introduction;
