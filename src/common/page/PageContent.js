import React from 'react';
import { node, string } from 'prop-types';
import styles from './PageContent.module.css';
import Headline2 from '../text/Headline2';
import { AosEffects } from '../../utils/constants';

const PageContent = ({ children, header }) => {
  return (
    <div className={styles.pageContentOuterContainer}>
      <Headline2 data-aos={AosEffects.FADE_IN}>{header}</Headline2>
      <div className={styles.pageContentInnerContainer}>{children}</div>
    </div>
  );
};

PageContent.propTypes = {
  children: node.isRequired,
  header: string,
};

PageContent.defaultProps = {
  header: '',
};

export default PageContent;
