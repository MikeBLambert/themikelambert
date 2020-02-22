import React from 'react';
import styles from './travel.module.css';
import worldMap from '../../images/world-map.png';
import PageContent from '../../common/page/PageContent';
import { AosEffects } from '../../utils/constants';

const Travel = () => {
  const { dot1, dot2, dot3, dot4, dot5 } = styles;

  const renderTravelDots = () =>
    [dot1, dot2, dot3, dot4, dot5].map(dot => (
      <div key={dot} className={`${styles.dot} ${dot}`} />
    ));
  return (
    <PageContent header="{ Globe Trotter }">
      <h4 className={styles.travelStats} data-aos={AosEffects.FADE_IN}>
        countriesLivedIn = [ Brazil, China, Mexico, Peru, United States ]
      </h4>
      <div className={styles.mapContainer} data-aos={AosEffects.FADE_IN}>
        <img src={worldMap} className={styles.mapImg} alt="World Map" />
        <div className={styles.dots}>{renderTravelDots()}</div>
      </div>
    </PageContent>
  );
};

export default Travel;
