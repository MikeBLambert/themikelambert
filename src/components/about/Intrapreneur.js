import React from 'react';
import styles from './Video.module.css';
import { VIDEO_URLS } from '../video/fixtures/videoContent';
import Ripple from '../../common/ripple/Ripple';
import Headline2 from '../../common/text/Headline2';

export default function Intrapreneur() {
  return (
    <div>
      <Headline2 data-aos="fade-in">{'{ Intrapreneur }'}</Headline2>
      <Ripple data-aos="fade-in" />
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
