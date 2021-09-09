import React from 'react'
import styles from './styles.module.css';
import video from '../../assets/video.mp4'

const About = (props) => {
    return (
        <div className={styles.about}>
            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.padding}`}>
                    <h1>{props.title}</h1>
                    {props.children}
                </div>


                <div className={`${styles.card} ${styles.padding}`}>
                    <div className={`${styles.circleTwo}`}>

                    </div>
                    <div className={`${styles.main}`}>
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                        >
                            <source src={video} type="video/mp4" />
                        </video>`
                    </div>
                    <div className={`${styles.circleOne}`}>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default About
