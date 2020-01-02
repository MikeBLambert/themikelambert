import React from 'react';
import styles from './DesktopNav.module.css';

const DesktopNav = ({ links, isFixed }) => {
  const className = `${styles.desktopNav} ${styles.navBar} ${isFixed &&
    styles.fixedNav}`;

  return <nav className={className}>{links}</nav>;
};

export default DesktopNav;
