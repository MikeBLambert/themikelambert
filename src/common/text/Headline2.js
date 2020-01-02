import React from 'react';
import styles from './styles.module.css';

const Headline2 = ({ children, ...other }) => (
  <h2 className={styles.headline2} {...other}>
    {children}
  </h2>
);

export default Headline2;
