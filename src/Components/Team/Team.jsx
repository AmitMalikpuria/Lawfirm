import React from "react";
import styles from './Team.module.css'
import Teamimg1 from '../../assets/Teamimg1.png'
import Teamimg2 from '../../assets/Teaming2.png'
import Teamimg3 from '../../assets/Teamimg3.png'
import Teamimg4 from '../../assets/Teamimg4.png'
import Teamimg5 from '../../assets/Teamimg5.png'
import Teamimg6 from '../../assets/Teamimg6.png'

function Team() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.groupTitle}>
                    <p className={styles.title}>Our Team</p>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.TeamCard}>
                        <div className={styles.TeamDetail}>
                            <img src={Teamimg1} alt="Teamimg-png" />
                            <div className={styles.detail}>
                                <p className={styles.name}>Daniel Def</p>
                                <p className={styles.cases}>301 Cases</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.TeamCard}>
                        <div className={styles.TeamDetail}>
                            <img src={Teamimg2} alt="Teamimg-png" />
                            <div className={styles.detail}>
                                <p className={styles.name}>Sanfole</p>
                                <p className={styles.cases}>409 Cases</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.TeamCard}>
                        <div className={styles.TeamDetail}>
                            <img src={Teamimg1} alt="Teamimg-png" />
                            <div className={styles.detail}>
                                <p className={styles.name}>Cesforila</p>
                                <p className={styles.cases}>470 Cases</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.TeamCard}>
                        <div className={styles.TeamDetail}>
                            <img src={Teamimg4} alt="Teamimg-png" />
                            <div className={styles.detail}>
                                <p className={styles.name}>Daniel Def</p>
                                <p className={styles.cases}>301 Cases</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.TeamCard}>
                        <div className={styles.TeamDetail}>
                            <img src={Teamimg5} alt="Teamimg-png" />
                            <div className={styles.detail}>
                                <p className={styles.name}>Sanfole</p>
                                <p className={styles.cases}>409 Cases</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.TeamCard}>
                        <div className={styles.TeamDetail}>
                            <img src={Teamimg6} alt="Teamimg-png" />
                            <div className={styles.detail}>
                                <p className={styles.name}>Cesforila</p>
                                <p className={styles.cases}>470 Cases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Team;
