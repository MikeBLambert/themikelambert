import React from 'react'
import styles from './global.module.css'
import worldMap from '../../images/world-map.png'

export default function global() {
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.globalTitle}>
        {'{ Global Citizen }'}
      </h1>
      <h4 className={styles.globalStats} data-aos="fade-in">
        countriesLivedIn = [ Brazil, China, Mexico, Peru, United States ]
      </h4>
      <div id={styles.map} data-aos="fade-in">
        <img src={worldMap} id={styles.mapImg} />
        <div id={styles.dots}>
          <div className={`${styles.dot} ${styles.dot1}`} />
          <div className={`${styles.dot} ${styles.dot2}`} />
          <div className={`${styles.dot} ${styles.dot3}`} />
          <div className={`${styles.dot} ${styles.dot4}`} />
          <div className={`${styles.dot} ${styles.dot5}`} />
        </div>
      </div>
      <h4 className={styles.globalStats} data-aos="fade-in">
        languagesSpoken = [ English, Mandarin-Chinese, Spanish, Portuguese ]
      </h4>

      <div id={styles.video} data-aos="fade-in">
        <iframe
          width="55%"
          // height="500vh"
          src="https://www.youtube.com/embed/xDnxZbRdYy8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-aos="fade-in"
          title="Expressing myself in multiple languages"
        />
      </div>
    </div>
  )
}
