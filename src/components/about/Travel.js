import React from 'react';
import styles from './travel.module.css';
import worldMap from '../../images/world-map.png';

export default function Travel() {
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.travelTitle}>
        {'{ Globe Trotter }'}
      </h1>
      <div id={styles.underLine} data-aos="fade-in" />
      <div id={styles.mapContainer} data-aos="fade-in">
        <img src={worldMap} id={styles.mapImg} alt="World Map" />
        <div id={styles.dots}>
          <div className={`${styles.dot} ${styles.dot1}`} />
          <div className={`${styles.dot} ${styles.dot2}`} />
          <div className={`${styles.dot} ${styles.dot3}`} />
          <div className={`${styles.dot} ${styles.dot4}`} />
          <div className={`${styles.dot} ${styles.dot5}`} />
        </div>
      </div>
      <h4 className={styles.travelStats} data-aos="fade-in">
        countriesLivedIn = [ Brazil, China, Mexico, Peru, United States ]
      </h4>
    </div>
  );
}
