import React from 'react';
import styles from './Video.module.css';

export default function Intrapreneur() {
  const videoStyles = {
    border: "3px solid black"
  }
  return (
    <div>
      <h1 data-aos="fade-in" id={styles.intraTitle}>
        {'{ Intrapreneur }'}
      </h1>
      <div id={styles.underLine} data-aos="fade-in" />
      <div id={styles.videoDiv} data-aos="fade-in">
          <iframe
            src="https://www.youtube.com/embed/XKmcWSvcMeY"
            id={styles.video}
            style={videoStyles}
            title="intrapreneurship"
          />
      </div>
    </div>
  );
}
