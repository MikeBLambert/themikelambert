import React from 'react';
import backgroundImage from '../../images/landing-image.jpg';
import styles from './landingImage.module.css';

export default function landingImage() {
  return (
    <div id={styles.landing}>
      <img src={backgroundImage} alt='mountains' id={styles.landingImage} />
      <h1 id={styles.landingTitle}>mikeLambert</h1>
    </div>
  )
}
