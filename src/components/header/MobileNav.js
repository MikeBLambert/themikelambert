import React from 'react';
import styles from './MobileNav.module.css';

const MobileNav = ({ links }) => (
  <div className={styles.hamburgerContainer}>
    <label className={styles.hamburgerLabel}>
      Checkbox for hamburger button
    </label>
    <input type="checkbox" className={styles.hamburgerInput} />
    <span className={styles.hamburgerSpan} />
    <div className={styles.mobileNav}>{links}</div>
  </div>
);

export default MobileNav;
