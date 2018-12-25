import React from 'react';
import Code from './Code';
import styles from './About.module.css';
import Study from './Study';
import Global from './Travel';

export default function About() {
  return (
    <div className={styles.aboutContainer} id="About">
      <h1 id={styles.aboutTitle} data-aos="fade-in">
        {'< About />'}
      </h1>
      <Code />
      <Study />
      <Global />
    </div>
  );
}
