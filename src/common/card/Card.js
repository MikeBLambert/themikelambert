import React from 'react';
import styles from './Card.module.css';
import { node, string, bool, func } from 'prop-types';

export const Card = ({ children, scrollAnimation, onClick, isInteractive }) => (
  <div
    onClick={onClick}
    data-aos={scrollAnimation}
    className={`${styles.cardContainer} ${isInteractive && styles.interactive}`}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: node.isRequired,
  scrollAnimation: string,
  isInteractive: bool,
  onClick: func,
};

Card.defaultProps = {
  scrollAnimation: '',
  isInteractive: false,
  onClick: () => {},
};
