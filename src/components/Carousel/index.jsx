import React from 'react'
import styles from './styles.module.css';
// import refresh from '../../assets/refresh.jpg'


const Slider = () => {
    return (
        <div className={styles.slider}>
             <div className={styles.grid}>
             <div className={`${styles.card} ${styles.padding}`}>
            <h1>Refresh Stirred Yogurt</h1>
            <h3>Our Latest Nourishing Flavoured Yoghurt</h3>
            <h4>".....the difference is in the taste."</h4>
        </div>
        <div className={styles.card}>
        <div className={styles.blob}>
            {/* <img src={refresh} alt="reFresh" /> */}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Slider
