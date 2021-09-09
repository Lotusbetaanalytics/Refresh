import React from 'react'
import styles from './styles.module.css';
import one from '../../assets/one.jpg'
import two from '../../assets/two.jpg'
import three from '../../assets/three.jpg'


const ProductPage = () => {
    return (
        <div className={styles.product}>
           <div className={styles.grids}>
                <div className={styles.products}>
                <img src={one} alt="Products" />
                </div>
                <div className={styles.products}>
                <img src={two} alt="Products" />
                </div>

                <div className={styles.products}>
                <img src={three} alt="Products" />
                </div>
                
           </div>
        </div>
    )
}

export default ProductPage
