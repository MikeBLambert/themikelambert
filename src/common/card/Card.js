import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, scrollAnimation, onClick }) => (
  <div
    onClick={onClick}
    data-aos={scrollAnimation}
    className={styles.cardContainer}
  >
    {children}
  </div>
);
