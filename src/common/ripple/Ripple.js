import React from 'react';
import styles from './Ripple.module.css';

const Ripple = ({ ...other }) => <div className={styles.ripple} {...other} />;

export default Ripple;
