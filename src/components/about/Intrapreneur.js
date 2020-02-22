import React from 'react';
import styles from './Video.module.css';
import { VIDEO_URLS } from '../video/fixtures/videoContent';
import PageContent from '../../common/page/PageContent';
import { AosEffects } from '../../utils/constants';

export default function Intrapreneur() {
  return (
    <PageContent header="{ Intrapreneur }">
      <div id={styles.videoDiv} data-aos={AosEffects.FADE_IN}>
        <iframe
          src={VIDEO_URLS.intrapreneurship}
          id={styles.video}
          title="intrapreneurship"
        />
      </div>
    </PageContent>
  );
}
