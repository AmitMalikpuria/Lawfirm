import React from "react";
import styles from './Clients.module.css'
import RightArrow from '../../assets/RightArrow.png'
import LeftArrow from '../../assets/LeftArrow.png'

import clientimg1 from '../../assets/Clientimg1.png'
import clientimg2 from '../../assets/ClientImg2.png'
import clientimg3 from '../../assets/ClientsImg3.png'

function Clients() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.happyclients}>
                    <div className={styles.wrap}>
                        <p className={styles.clientsTitle}>What says our happy Clients</p>
                    </div>
                    <div className={styles.arrowContainer}>
                        <img src={LeftArrow} alt="leftarrow-png" />
                        <img src={RightArrow} alt="rightarrow-png" />
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card2}>
                        <img src={clientimg1} alt="client1-png" className={styles.imgChooseIcon} />
                        <p className={styles.cardTitle}>Jane Cooper</p>
                        <p className={styles.cardSubTitle}>CEO of Hunt</p>
                        <p className={styles.cardDefinition}>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                    <div className={styles.card1}>
                        <img src={clientimg2} alt="client1-png" className={styles.imgChooseIcon} />
                        <p className={styles.cardTitle}>Jane Cooper</p>
                        <p className={styles.cardSubTitle}>CEO of Hunt</p>
                        <p className={styles.cardDefinition}>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                    <div className={styles.card2}>
                        <img src={clientimg3} alt="client1-png" className={styles.imgChooseIcon} />
                        <p className={styles.cardTitle}>Robert Fox</p>
                        <p className={styles.cardSubTitle}>CEO of Hunt</p>
                        <p className={styles.cardDefinition}>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                </div>
            </div>
        </div>);
}

export default Clients;
