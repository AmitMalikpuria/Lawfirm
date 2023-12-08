import React from "react";
import styles from './AreaofPractice.module.css'
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

function AreaofPractice() {
    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.groupTitle}>
                    <p className={styles.title}>Area of Practices</p>
                </div>
                <div>
                    <div className={styles.imgContainer}>
                        <img src={img1} alt="img1-png" />
                        <img src={img2} alt="img2-png" />
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={img3} alt="img3-png" />
                        <img src={img4} alt="img4-png" />
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={img5} alt="img5-png" />
                        <img src={img6} alt="img6-png" />
                    </div>
                </div>

            </div>
        </div>);
}

export default AreaofPractice;



