import React from 'react';
import { node, string } from 'prop-types';
import styles from './Page.module.css';
import Headline1 from '../text/Headline1';
import Ripple from '../ripple/Ripple';
import { AosEffects } from '../../utils/constants';

const Page = ({ children, title, ...other }) => {
  const renderTitle = () => {
    if (title) {
      return (
        <>
          <Headline1 data-aos={AosEffects.FADE_IN}>{title}</Headline1>
          <Ripple data-aos={AosEffects.FADE_IN} />
        </>
      );
    }
    return null;
  };
  return (
    <div className={styles.page} {...other}>
      {renderTitle()}
      {children}
    </div>
  );
};

Page.propTypes = {
  title: string,
  children: node.isRequired,
};

Page.defaultProps = {
  title: null,
};

export default Page;
