import { useEffect, useState } from 'react';

const useMediaQueries = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  const handleResize = () => {
    setWindowDimensions({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.onresize = handleResize;
  }, []);
  return [windowDimensions.windowWidth, windowDimensions.windowHeight];
};

export default useMediaQueries;
