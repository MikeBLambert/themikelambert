import React from 'react';
import nannyImage from '../../images/portfolio/nanny.png';
import styles from './Modal.module.css';

export default function Nanny({ show, hideModal }) {
  const showOrHide = show ? styles.displayModal : styles.hideModal;

  const technologies = ['React', 'Redux', 'MomentJS', 'Node', 'Express', 'MongoDB', 'Jest'];
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
          An application designed to assist 3rd-party childcare placement agencies compete in a digital world. It connects families and nannies to assist with scheduling of short-term childcare/babysitting appointments.
          </p>
          <div id={styles.techListAndScreenshot}>
            <div>
              <p className={styles.techListTitle}>
                <b>Technologies Used:</b>
              </p>
              {technologiesList}
            </div>
            <img
              src={nannyImage}
              alt="Nanny Now Screenshot"
              id={styles.screenshot}
            />
          </div>
        </div>
      </div>
      <div id={styles.gitHubButtonContainer}>
      <a href="https://github.com/team-party-blob/nannynow">
        <button id={styles.gitHubButton} >GitHub Repo</button>
      </a>
      </div>
    </div>
  );
}
