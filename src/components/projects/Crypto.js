import React from 'react';
import cryptoImage from '../../images/portfolio/crypto.png';
import styles from './Modal.module.css';

export default function Crypto({ show, hideModal }) {
  const showOrHide = show ? styles.displayModal : styles.hideModal;

  const technologies = ['Node', 'Express', 'Jest', 'MongoDB'];
  const technologiesList = technologies.map((technology, i) => {
    return (
      <p key={i} className={styles.techList}>
        {technology}
      </p>
    );
  });

  return (
    <div className={showOrHide}>
      <button onClick={hideModal} id={styles.closeButton}>
        X
      </button>
      <div id={styles.modalContent}>
        <h3 id={styles.modalTitle}>Cryptocurrency Trading Simulation</h3>
        <div>
          <p>
          Using real-time market pricing, this simulation allows users to buy and sell the world's top 10 cryptocurrencies (by market capitalization) and compete for status as the top trader.
          </p>
          <div id={styles.techListAndScreenshot}>
            <div>
              <p className={styles.techListTitle}>
                <b>Technologies Used:</b>
              </p>
              {technologiesList}
            </div>
            <img
              src={cryptoImage}
              alt="Cryptocurrency Simulation Screenshot"
              id={styles.screenshot}
            />
          </div>
        </div>
      </div>
      <div id={styles.gitHubButtonContainer}>
      <a href="https://github.com/MikeBLambert/cryptokeeper-server">
        <button id={styles.gitHubButton} >GitHub Repo</button>
      </a>
      </div>
    </div>
  );
}
