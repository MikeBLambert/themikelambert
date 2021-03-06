import React from 'react';
import styles from './Headline1.module.css';

const Headline1 = ({ children, ...other }) => (
  <h1 className={styles.headline1} {...other}>
    {children}
  </h1>
);

export default Headline1;
