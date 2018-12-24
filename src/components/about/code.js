import React from 'react';
import styles from './Code.module.css';
import vueLogo from '../../images/logos/vue.png';
import reactLogo from '../../images/logos/react.png';
import reduxLogo from '../../images/logos/redux.png';
import nodeLogo from '../../images/logos/node.png';
import jsLogo from '../../images/logos/js.png';
import htmlLogo from '../../images/logos/html.png';
import cssLogo from '../../images/logos/css.png';
import gatsbyLogo from '../../images/gatsby-icon.png';
import postgresLogo from '../../images/logos/postgres.png';
import mongoLogo from '../../images/logos/mongo.png';
import jestLogo from '../../images/logos/jest.png';
import gitLogo from '../../images/logos/git.png';
import bashLogo from '../../images/logos/bash.png';

export default function Code() {
  return (
    <div id={styles.codeContent}>
      <h1 data-aos="fade-in" id={styles.codeTitle}>
        {'{ Software Engineer }'}
      </h1>
      <div id={styles.allLogosDiv}>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={vueLogo}
            className={styles.logo}
            id={styles.vueLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Vue</h4>
        </div>
        <div
          data-aos="zoom-in-right"
          className={styles.logoDiv}
          id={styles.reactLogoDiv}
        >
          <img
            src={reactLogo}
            className={styles.logo}
            id={styles.reactLogo}
            alt="react logo"
          />
          <h4 className={styles.logoLabel}>React</h4>
        </div>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={reduxLogo}
            className={styles.logo}
            id={styles.reduxLogo}
            alt="redux logo"
          />
          <h4 className={styles.logoLabel}>Redux</h4>
        </div>
        <div
          data-aos="zoom-in-right"
          className={styles.logoDiv}
          id={styles.nodeLogoDiv}
        >
          <img
            src={nodeLogo}
            className={styles.logo}
            alt="node logo"
            id={styles.nodeLogo}
          />
          <h4 className={styles.logoLabel}>NodeJS</h4>
        </div>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={jsLogo}
            className={styles.logo}
            alt="javascript logo"
            id={styles.jsLogo}
          />
          <h4 className={styles.logoLabel}>JavaScript</h4>
        </div>
        <div data-aos="zoom-in-right" className={styles.logoDiv}>
          <img
            src={htmlLogo}
            className={styles.logo}
            id={styles.htmlLogo}
            alt="html logo"
          />
          <h4 className={styles.logoLabel}>HTML5</h4>
        </div>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={cssLogo}
            className={styles.logo}
            id={styles.cssLogo}
            alt="css logo"
          />
          <h4 className={styles.logoLabel}>CSS</h4>
        </div>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={gatsbyLogo}
            className={styles.logo}
            id={styles.gatsbyLogo}
            alt="gatsby logo"
          />
          <h4 className={styles.logoLabel}>Gatsby</h4>
        </div>
        <div data-aos="zoom-in-right" className={styles.logoDiv}>
          <img
            src={postgresLogo}
            className={styles.logo}
            id={styles.postgresLogo}
            alt="postgresql logo"
          />
          <h4 className={styles.logoLabel}>PostgreSQL</h4>
        </div>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={mongoLogo}
            className={styles.logo}
            id={styles.mongoLogo}
            alt="mongodb logo"
          />
          <h4 className={styles.logoLabel}>MongoDB</h4>
        </div>
        <div data-aos="zoom-in-right" className={styles.logoDiv}>
          <img
            src={jestLogo}
            className={styles.logo}
            id={styles.jestLogo}
            alt="jest logo"
          />
          <h4 className={styles.logoLabel}>Jest</h4>
        </div>
        <div data-aos="zoom-in-left" className={styles.logoDiv}>
          <img
            src={gitLogo}
            className={styles.logo}
            id={styles.gitLogo}
            alt="git logo"
          />
          <h4 className={styles.logoLabel}>Git</h4>
        </div>
        <div data-aos="zoom-in-right" className={styles.logoDiv}>
          <img src={bashLogo} className={styles.logo} id={styles.bashLogo} alt="bash logo" />
          <h4 className={styles.logoLabel}>BASH</h4>
        </div>
      </div>
    </div>
  );
}
