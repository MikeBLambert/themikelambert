import React from 'react';
import styles from './ImageCardLabel.module.css';

const ImageCardLabel = ({ children, ...other }) => {
  return (
    <h4 className={styles.imageCardLabel} {...other}>
      {children}
    </h4>
  );
};

export default ImageCardLabel;
