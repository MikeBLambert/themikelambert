import React, { PureComponent, Fragment } from 'react';
import styles from './Projects.module.css';
import Project from './Project';
import { projects } from './fixtures/projectContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Headline1 from '../../common/text/Headline1';
import Ripple from '../../common/ripple/Ripple';
import { AosEffects } from '../../utils/constants';

export default class Projects extends PureComponent {
  state = {
    show: 'none',
  };

  componentDidMount() {
    AOS.init({
      delay: 100,
    });
  }

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
          data-aos="fade-down"
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
          <Fragment>
            <Headline1 data-aos={AosEffects.FADE_IN}>
              {'< Projects />'}
            </Headline1>
            <Ripple data-aos={AosEffects.FADE_IN} />
          </Fragment>
        )}

        <div id={styles.buttonContainer}>
          {show === 'none' && projectButtonList}
          {projectList}
        </div>
      </div>
    );
  }
}
