import React from 'react';
import styles from './study.module.css';
import uwLogo from '../../images/logos/university-of-washington.png';
import nanjingNormalLogo from '../../images/logos/nanjing-normal.png';
import ieLogo from '../../images/logos/ie.png';
import alchemyLogo from '../../images/logos/alchemy.webp';

export default function study() {
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.studyTitle}>{'{ Student }'}</h1>
      <div id={styles.allStudyLogos}>
        <div className={styles.studyLogoDiv} data-aos="flip-left">
          <img src={uwLogo} id={styles.uwLogo} alt="University of Washington Logo" />
          <h4 className={styles.studyLabel}>Philosophy</h4>
        </div>
        <div className={styles.studyLogoDiv} data-aos="flip-left">
          <img src={nanjingNormalLogo} id={styles.nanjingNormalLogo} alt="Nanjing Normal University Logo" />
          <h4 className={styles.studyLabel}>Mandarin-Chinese</h4>
        </div>
        <div className={styles.studyLogoDiv} data-aos="flip-left">
          <img src={ieLogo} id={styles.ieLogo} alt="IE Business School Logo" />
          <h4 className={styles.studyLabel}>MBA</h4>
        </div>
        <div className={styles.studyLogoDiv} data-aos="flip-left">
          <img id={styles.alchemyLogo} src={alchemyLogo} alt="Alchemy Code Lab Logo" />
          <h4 className={styles.studyLabel}>Software Engineering</h4>
        </div>
      </div>
    </div>
  )
}
