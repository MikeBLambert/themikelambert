import React from 'react';
import styles from './Video.module.css';
import Ripple from '../../common/ripple/Ripple';
import Headline2 from '../../common/text/Headline2';

export default function Polyglot() {
  return (
    <div>
      <Headline2 data-aos="fade-in">{'{ Multilingual }'}</Headline2>
      <Ripple data-aos="fade-in" />
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
