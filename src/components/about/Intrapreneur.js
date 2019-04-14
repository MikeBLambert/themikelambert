import React from 'react';
import styles from './Video.module.css';
import { VIDEO_URLS } from '../video/fixtures/videoContent';

export default function Intrapreneur() {
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.intraTitle}>
        {'{ Intrapreneur }'}
      </h1>
      <div id={styles.underLine} data-aos="fade-in" />
      <div id={styles.videoDiv} data-aos="fade-in">
        <iframe
          src={VIDEO_URLS.intrapreneurship}
          id={styles.video}
          title="intrapreneurship"
        />
      </div>
    </div>
  );
}
