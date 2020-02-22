import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby';
import styles from './NavBar.module.css';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { NAV_LINKS } from '../../utils/constants';

const NavBar = ({ isFixed }) => {
  const links = NAV_LINKS.map(link => (
    <Link key={link} to={link} className={styles.navLink}>
      {link}
    </Link>
  ));

  return (
    <>
      <MobileNav links={links} />
      <DesktopNav links={links} isFixed={isFixed} />
    </>
  );
};

NavBar.propTypes = {
  isFixed: bool.isRequired,
};

export default NavBar;
