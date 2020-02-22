import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './header/Header';
import styles from './layout.module.css';
import useDynamicHeader from '../common/custom-hooks/useDynamicHeader';

const Layout = ({ children, isLandingImageDisplayed }) => {
  const [contentPaddingTop, imageHeight, isFixed] = useDynamicHeader();

  useEffect(() => {
    AOS.init({
      delay: 200,
    });
  }, []);

  return (
    <>
      <Header
        imageHeight={imageHeight}
        isFixed={isFixed}
        className={styles.landingWithHeader}
        isLandingImageDisplayed={isLandingImageDisplayed}
      />
      <div style={{ paddingTop: `${contentPaddingTop}px` }}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  isLandingImageDisplayed: PropTypes.bool,
};

Layout.defaultProps = {
  isLandingImageDisplayed: false,
};

export default Layout;
