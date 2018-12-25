import React, { PureComponent, Fragment } from 'react';
import styles from './Projects.module.css';
import Project from './Project';
// import {
//   PROJECT_1_TITLE,
//   PROJECT_1_TECHNOLOGIES,
//   PROJECT_1_DESCRIPTION,
//   PROJECT_1_IMG_ALT,
//   PROJECT_1_URL,
//   PROJECT_2_TITLE,
//   PROJECT_2_TECHNOLOGIES,
//   PROJECT_2_DESCRIPTION,
//   PROJECT_2_IMG_ALT,
//   PROJECT_2_URL,
//   PROJECT_3_TITLE,
//   PROJECT_3_TECHNOLOGIES,
//   PROJECT_3_DESCRIPTION,
//   PROJECT_3_IMG_ALT,
//   PROJECT_3_URL,
// } from './projectContent';

import { projects } from './projectContent';

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

    const projectList = projects.map((project, i) => {
      return (
        <Fragment key={i}>
          {show === project.keyword && (
            <Project
              show={show}
              hideModal={this.hideModal}
              technologies={project.technologies}
              title={project.title}
              description={project.description}
              alt={project.alt}
              url={project.url}
              screenshot={project.screenshot}
            />
          )}
        </Fragment>
      );
    });

    const projectButtonList = projects.map((project, i) => {
      return (
        <button
          data-aos="flip-down"
          className={styles.projectButton}
          value={project.keyword}
          onClick={this.showModal}
          key={i}
        >
          {project.title}
        </button>
      );
    });

    return (
      <div id="Projects" className={projectsDivStyle}>
        {show === 'none' && (
          <h1 id={styles.projectsTitle} data-aos="fade-in">
            {'< Projects />'}
          </h1>
        )}

        <div id={styles.buttonContainer}>
          {show === 'none' && projectButtonList}
          {projectList}
        </div>
      </div>
    );
  }
}
