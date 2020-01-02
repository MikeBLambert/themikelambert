import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import backgroundImage from '../../images/landing-image.jpg';
import NavBar from './NavBar';

const Header = ({ showLandingImage, isFixed, imageHeight }) => {
  return (
    <div>
      {showLandingImage && (
        <div id={styles.landing}>
          <img
            src={backgroundImage}
            alt="mountains"
            style={{ height: `${imageHeight}` }}
            className={styles.landingImage}
            id="landingImage"
          />

          <h1 id={styles.landingTitle}>mikeLambert</h1>
        </div>
      )}
      <NavBar isFixed={isFixed} />
    </div>
  );
};

export default Header;
