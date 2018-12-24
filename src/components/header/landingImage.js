import React from 'react';
import backgroundImage from '../../images/landing-image.jpg';
import styles from './LandingImage.module.css';

export default function LandingImage() {
  return (
    <div id={styles.landing}>
      <img src={backgroundImage} alt='mountains' id={styles.landingImage} />
      <h1 id={styles.landingTitle}>mikeLambert</h1>
    </div>
  )
}
