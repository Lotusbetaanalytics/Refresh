import React from 'react'
import styles from './styles.module.css';
import one from '../../assets/refresh.jpg'
import two from '../../assets/refresh1.jpg'
import three from '../../assets/refresh5.jpg'

const Product = () => {
    return (
        <div className={styles.product}>
            <h1>Our Products</h1>
            <div className={styles.grid}>
            <div className={styles.products}>
            <div className={styles.circle}>
            <img src={one} alt="Refresh" />
            </div>
            <h4>Refresh Sweetened Milk</h4>
            </div>

            <div className={styles.products}>
            <div className={styles.circle}>
            <img src={two} alt="Refresh" />
            </div>
            <h4>Drinking Yoghurt</h4>
            </div>

            <div className={styles.products}>
            <div className={styles.circle}>
            <img src={three} alt="Refresh" />
            </div>
            <h4>Stirred Yoghurt</h4>
            </div>

            </div>
        </div>
    )
}

export default Product
