import React from 'react'
import styles from './styles.module.css';

const Component = (props) => {
    return (
        <div className={styles.about}>
             <div className={styles.grid}>
             <div className={`${styles.cards} ${styles.padding}`}>
            <h1>{props.title}</h1>
            {props.children}
        </div>


        <div className={`${styles.cards} ${styles.padding}`}>
       
        <div className={`${styles.carousel} ${styles.padding} ${styles.custom}`}>
       
      
       </div>
        </div>

        </div>
        </div>
    )
}

export default Component
