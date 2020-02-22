import React from 'react';
import styles from './Video.module.css';
import Ripple from '../../common/ripple/Ripple';
import Headline2 from '../../common/text/Headline2';
import PageContent from '../../common/page/PageContent';
import { AosEffects } from '../../utils/constants';

export default function Polyglot() {
  return (
    <PageContent header="{ Multilingual }">
      <div id={styles.videoDiv} data-aos={AosEffects.FADE_IN}>
        <iframe
          src="https://www.youtube.com/embed/xDnxZbRdYy8"
          id={styles.video}
          title="intrapreneurship"
        />
      </div>
    </PageContent>
  );
}
