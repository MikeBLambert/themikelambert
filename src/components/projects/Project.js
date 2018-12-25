import React from 'react';
import styles from './Project.module.css';
import { PropTypes } from 'prop-types';

const Project = ({ show, hideModal, technologies, title, description, alt, screenshot, url }) => {
  const showOrHide = show ? styles.displayModal : styles.hideModal;

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
        <h3 id={styles.modalTitle}>{title}</h3>
        <div>
          <p id={styles.modalText}>
            {description}
          </p>
          <div id={styles.techListAndScreenshot}>
            <div>
              <p className={styles.techListTitle}>
                <b>Technologies Used:</b>
              </p>
              {technologiesList}
            </div>
            <img
              src={screenshot}
              alt={alt}
              id={styles.screenshot}
            />
          </div>
        </div>
      </div>
      <div id={styles.gitHubButtonContainer}>
      <a href={url}>
        <button id={styles.gitHubButton} >GitHub Repo</button>
      </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  show: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  technologies: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Project;