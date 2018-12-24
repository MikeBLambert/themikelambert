import React, { PureComponent } from 'react';
import Jeopardy from './Jeopardy';
import Crypto from './Crypto';
import Nanny from './Nanny';
import styles from './Projects.module.css';
import Project from './Project';
import {
  PROJECT_1_TITLE,
  PROJECT_1_TECHNOLOGIES,
  PROJECT_1_DESCRIPTION,
  PROJECT_1_IMG_ALT,
  PROJECT_1_URL,
} from './projectContent';
import jeopardyScreenshot from '../../images/portfolio/jeopardy.png';

export default class Projects extends PureComponent {
  state = {
    show: 'none',
  };

  showModal = ({ target }) => {
    this.setState({ show: target.value });
  };

  hideModal = () => {
    this.setState({ show: 'none' });
  };

  render() {
    const { show } = this.state;

    const projectsDivStyle = show === 'none' ? styles.normal : styles.overlay;

    return (
      <div id="Projects" className={projectsDivStyle}>
        {show === 'none' && (
          <h1 id={styles.projectsTitle} data-aos="fade-in">
            {'< Projects />'}
          </h1>
        )}

        <div id={styles.buttonContainer}>
          {show === 'none' && (
            <button
              data-aos="flip-down"
              className={styles.projectButton}
              value="nanny"
              onClick={this.showModal}
            >
              Nanny Now!
            </button>
          )}

          {show === 'none' && (
            <button
              data-aos="flip-down"
              className={styles.projectButton}
              value="jeopardy"
              onClick={this.showModal}
            >
              Jeopardy For Educators
            </button>
          )}

          {show === 'none' && (
            <button
              data-aos="flip-down"
              className={styles.projectButton}
              value="crypto"
              onClick={this.showModal}
            >
              Cryptocurrency Simulation
            </button>
          )}
          {show === 'nanny' && <Nanny show={show} hideModal={this.hideModal} />}
          {show === 'jeopardy' && (
            <Project
              show={show}
              hideModal={this.hideModal}
              technologies={PROJECT_1_TECHNOLOGIES}
              title={PROJECT_1_TITLE} description={PROJECT_1_DESCRIPTION}
              alt={PROJECT_1_IMG_ALT}
              url={PROJECT_1_URL}
              screenshot={jeopardyScreenshot}
            />
          )}

          {/* {show === 'jeopardy' && <Jeopardy show={show} hideModal={this.hideModal} />} */}
          {show === 'crypto' && (
            <Crypto show={show} hideModal={this.hideModal} />
          )}
        </div>
      </div>
    );
  }
}
