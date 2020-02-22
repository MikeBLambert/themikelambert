import React from 'react';
import { arrayOf, object } from 'prop-types';
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

MobileNav.propTypes = {
  links: arrayOf(object).isRequired,
};

export default MobileNav;
