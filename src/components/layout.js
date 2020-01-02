import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import styles from './layout.module.css';

const Layout = ({ children, showLandingImage }) => {
  const [scrolledTo, setScrolledTo] = useState(null);
  const [top, setTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);

  const handleScroll = () => {
    setScrolledTo(window.scrollY);
  };

  useEffect(() => {
    if (!showLandingImage) return;
    const nav = document.querySelector('nav');
    const imageHeight = document.getElementById('landingImage').height;
    setTop(nav.offsetTop);
    setHeight(nav.offsetHeight);
    setImageHeight(imageHeight);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrolledTo(window.scrollY);
  }, [window.scrollY]);

  const getIsFixed = () => scrolledTo > top;

  const getSectionPaddingTop = () => {
    if (scrolledTo > top && window.innerWidth > 699) return height;
    return 0;
  };

  return (
    <>
      <Header
        isFixed={getIsFixed()}
        imageHeight={imageHeight}
        id={styles.landingWithHeader}
        showLandingImage={showLandingImage}
      />
      <div style={{ paddingTop: `${getSectionPaddingTop()}px` }}>
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
