import React from 'react';
import styles from './PageContent.module.css';
import Headline2 from '../text/Headline2';
import { AosEffects } from '../../utils/constants';
import Card from '../card/Card';

const PageContent = ({ children, header }) => {
  return (
    <div className={styles.pageContentOuterContainer}>
      <Headline2 data-aos={AosEffects.FADE_IN}>{header}</Headline2>
      <div className={styles.pageContentInnerContainer}>{children}</div>
    </div>
  );
};

export default PageContent;
