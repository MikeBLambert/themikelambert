import { useState, useEffect } from 'react';
const useDynamicHeader = () => {
  const [isFixed, setIsFixed] = useState(false);

  const [dimensions, setDimensions] = useState({
    navOffsetHeight: null,
    navOffsetTop: null,
    imageHeight: null,
  });

  const handleScroll = () => {
    if (window.scrollY > dimensions.navOffsetTop) setIsFixed(true);
    if (dimensions.navOffsetTop >= window.scrollY) setIsFixed(false);
  };

  useEffect(() => {
    setPageDimensions();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dimensions]);

  const setPageDimensions = () => {
    const landingImage = document.getElementById('landingImage');

    const nav = document.querySelector('nav');
    setDimensions({
      imageHeight: landingImage && landingImage.clientHeight,
      navOffsetHeight: nav.offsetHeight,
      navOffsetTop: nav.offsetTop,
    });
  };

  const contentPaddingTop =
    isFixed && window.innerWidth > 699 ? dimensions.navOffsetHeight : 0;

  return [contentPaddingTop, dimensions.imageHeight, isFixed];
};

export default useDynamicHeader;
