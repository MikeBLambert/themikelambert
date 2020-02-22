import { useEffect, useState } from 'react';

const useMediaQueries = () => {
  const [windowDimensions, setWindowDimensions] = useState({});

  const handleResize = () => {
    setWindowDimensions({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    handleResize();
    window.onresize = handleResize;
  }, []);
  return [windowDimensions.windowWidth, windowDimensions.windowHeight];
};

export default useMediaQueries;
