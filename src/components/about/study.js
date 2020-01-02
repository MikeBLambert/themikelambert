import React from 'react';
import styles from './Study.module.css';
import uwLogo from '../../images/logos/university-of-washington.png';
import nanjingNormalLogo from '../../images/logos/nanjing-normal.png';
import ieLogo from '../../images/logos/ie.png';
import alchemyLogo from '../../images/logos/alchemy.png';
import Ripple from '../../common/ripple/Ripple';
import Headline2 from '../../common/text/Headline2';

export default function Study() {
  return (
    <div>
      <Headline2 data-aos="fade-in">{'{ Graduate }'}</Headline2>
      <Ripple data-aos="fade-in" />
      <div id={styles.allStudyLogos}>
        <div className={styles.studyLogoDiv} data-aos="fade-left">
          <img
            src={uwLogo}
            id={styles.uwLogo}
            alt="University of Washington Logo"
          />
          <h4 className={styles.studyLabel}>Philosophy</h4>
        </div>
        <div className={styles.studyLogoDiv} data-aos="fade-left">
          <img
            src={nanjingNormalLogo}
            id={styles.nanjingNormalLogo}
            alt="Nanjing Normal University Logo"
          />
          <h4 className={styles.studyLabel}>Mandarin-Chinese</h4>
        </div>
        <div className={styles.studyLogoDiv} data-aos="fade-right">
          <img src={ieLogo} id={styles.ieLogo} alt="IE Business School Logo" />
          <h4 className={styles.studyLabel}>MBA</h4>
        </div>
        <div className={styles.studyLogoDiv} data-aos="fade-right">
          <img
            id={styles.alchemyLogo}
            src={alchemyLogo}
            alt="Alchemy Code Lab Logo"
          />
          <h4 className={styles.studyLabel}>Software Engineering</h4>
        </div>
      </div>
    </div>
  );
}
