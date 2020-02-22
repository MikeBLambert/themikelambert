import React, { PureComponent } from 'react';
import styles from './Contact.module.css';
import gmailLogo from '../../images/logos/gmail.png';
import linkedInLogo from '../../images/logos/linkedIn.png';
import gitHubLogo from '../../images/logos/gitHub.png';
import twitterLogo from '../../images/logos/twitter.png';
import Page from '../../common/page/Page';

export default class Contact extends PureComponent {
  render() {
    return (
      <Page title="< Contact />">
        <div id={styles.contactLogosDiv}>
          <div className={styles.logoDiv} data-aos="fade-right">
            <a href="mailto:mlamb128@gmail.com">
              <img
                id={styles.gmailLogo}
                className={styles.contactLogo}
                src={gmailLogo}
                alt="Gmail Logo"
              />
            </a>
          </div>

          <div className={styles.logoDiv} data-aos="fade-right">
            <a href="https://github.com/MikeBLambert">
              <img
                id={styles.gitHubLogo}
                className={styles.contactLogo}
                src={gitHubLogo}
                alt="GitHub Logo"
              />
            </a>
          </div>

          <div className={styles.logoDiv} data-aos="fade-right">
            <a href="https://www.linkedin.com/in/mike-b-lambert/">
              <img
                id={styles.linkedInLogo}
                className={styles.contactLogo}
                src={linkedInLogo}
                alt="LinkedIn Logo"
              />
            </a>
          </div>

          <div className={styles.logoDiv} data-aos="fade-right">
            <a href="https://twitter.com/mikeblambert">
              <img
                id={styles.twitterLogo}
                className={styles.contactLogo}
                src={twitterLogo}
                alt="twitter logo"
              />
            </a>
          </div>
        </div>
      </Page>
    );
  }
}
