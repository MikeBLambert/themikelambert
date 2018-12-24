import React from 'react';
import styles from './Contact.module.css';
import gmailLogo from '../../images/logos/gmail.png';
import linkedInLogo from '../../images/logos/linkedIn.png';
import gitHubLogo from '../../images/logos/gitHub.png';
import twitterLogo from '../../images/logos/twitter.png';

export default function Contact() {
  return (
    <div id="Contact">
      <h1 id={styles.contactTitle} data-aos="fade-in">
        {'< Contact />'}
      </h1>
      <div id={styles.contactLogosDiv} >
        <div className={styles.logoDiv} data-aos="flip-right">
          <a href="mailto:mlamb128@gmail.com">
            <img
              id={styles.gmailLogo}
              className={styles.contactLogo}
              src={gmailLogo}
            />
          </a>
        </div>

        <div className={styles.logoDiv} data-aos="flip-right">
          <a href="https://github.com/MikeBLambert">
            <img
              id={styles.gitHubLogo}
              className={styles.contactLogo}
              src={gitHubLogo}
            />
          </a>
        </div>

        <div className={styles.logoDiv} data-aos="flip-right">
          <a href="https://www.linkedin.com/in/mike-b-lambert/">
            <img
              id={styles.linkedInLogo}
              className={styles.contactLogo}
              src={linkedInLogo}
            />
          </a>
        </div>

        <div className={styles.logoDiv} data-aos="flip-right">
          <a href="https://twitter.com/mikeblambert">
            <img
              id={styles.twitterLogo}
              className={styles.contactLogo}
              src={twitterLogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
