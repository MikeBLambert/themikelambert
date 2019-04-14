import React from 'react';
import styles from './Video.module.css';

export default function Polyglot() {
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.intraTitle}>
        {'{ Multilingual }'}
      </h1>
      <div id={styles.underLine} data-aos="fade-in" />
      <div id={styles.videoDiv} data-aos="fade-in">
        <iframe
          src="https://www.youtube.com/embed/xDnxZbRdYy8"
          id={styles.video}
          title="intrapreneurship"
        />
      </div>
    </div>
  );
}