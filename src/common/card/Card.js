import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, scrollAnimation, onClick, isInteractive }) => (
  <div
    onClick={onClick}
    data-aos={scrollAnimation}
    className={`${styles.cardContainer} ${isInteractive && styles.interactive}`}
  >
    {children}
  </div>
);
