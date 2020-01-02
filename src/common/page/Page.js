import React from 'react';
import styles from './Page.module.css';

const Page = ({ children, ...other }) => {
  return (
    <div className={styles.page} {...other}>
      {children}
    </div>
  );
};

export default Page;
