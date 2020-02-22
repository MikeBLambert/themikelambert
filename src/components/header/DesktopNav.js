import React from 'react';
import { arrayOf, object, bool } from 'prop-types';
import styles from './DesktopNav.module.css';

const DesktopNav = ({ links, isFixed }) => {
  const className = `${styles.desktopNav} ${styles.navBar} ${isFixed &&
    styles.fixedNav}`;

  return <nav className={className}>{links}</nav>;
};

DesktopNav.propTypes = {
  links: arrayOf(object).isRequired,
  isFixed: bool.isRequired,
};

export default DesktopNav;
