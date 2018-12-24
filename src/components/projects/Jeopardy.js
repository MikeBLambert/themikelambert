import React from 'react';
import jeopardyImage from '../../images/portfolio/jeopardy.png';
import styles from './Modal.module.css';

export default function Jeopardy({ show, hideModal }) {
  const showOrHide = show ? styles.displayModal : styles.hideModal;

  const technologies = ['Vue', 'Node', 'Express', 'PostgreSQL'];
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
        <h3 id={styles.modalTitle}>Jeopardy For Educators</h3>
        <div>
          <p id={styles.modalText}>
            A teaching tool for instructors at any level who want to bring a fun
            game designed to aid student learning. Inspired by Jeopardy,
            Jeopardy For Educators allows the user to create a board specific to
            their needs. The user is able to search our database of over 300,000
            Jeopardy questions as well as create their own.
          </p>
          <div id={styles.techListAndScreenshot}>
            <div>
              <p className={styles.techListTitle}>
                <b>Technologies Used:</b>
              </p>
              {technologiesList}
            </div>
            <img
              src={jeopardyImage}
              alt="Jeopardy for Educators screenshot"
              id={styles.screenshot}
            />
          </div>
        </div>
      </div>
      <div id={styles.gitHubButtonContainer}>
      <a href="https://github.com/MikeBLambert/jeopardy_for_teachers_app">
        <button id={styles.gitHubButton} >GitHub Repo</button>
      </a>
      </div>
    </div>
  );
}
