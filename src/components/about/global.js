import React from 'react'
import styles from './global.module.css'
import worldMap from '../../images/world-map.png'

export default function global() {
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.globalTitle}>
        {'{ Global Citizen }'}
      </h1>
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
      <div id={styles.video} data-aos="flip-right">
        <iframe
          width="55%"
          height="500vh"
          src="https://www.youtube.com/embed/xDnxZbRdYy8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          data-aos="fade-in"
          title="Expressing myself in multiple languages"
        />
      </div>
    </div>
  )
}
