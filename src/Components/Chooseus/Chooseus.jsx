import React from "react";
import styles from './Chooseus.module.css'
import iconImg from '../../assets/chooseusicon.png'

function Chooseus() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Why Choose us?</p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card1}>
                        <img src={iconImg} alt="img-icon-chooseus" className={styles.imgChooseIcon} />
                        <p className={styles.cardTitle}>98% Success Rate</p>
                        <p className={styles.cardDefinition}>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <div className={styles.buttonReadMore}>
                            <button className={styles.cardButton}>Reaad More</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <img src={iconImg} alt="img-icon-chooseus" className={styles.imgChooseIcon} />
                        <p className={styles.cardTitle}>100% Success Rate</p>
                        <p className={styles.cardDefinition}>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <div className={styles.buttonReadMore}>
                            <button className={styles.cardButton}>Reaad More</button>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <img src={iconImg} alt="img-icon-chooseus" className={styles.imgChooseIcon} />
                        <p className={styles.cardTitle}>100% Success Rate</p>
                        <p className={styles.cardDefinition}>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <div className={styles.buttonReadMore}>
                            <button className={styles.cardButton}>Reaad More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >);
}

export default Chooseus;
