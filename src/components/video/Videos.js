import React, { PureComponent } from 'react';
import { videos } from './fixtures/videoContent';
import styles from './Videos.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Videos extends PureComponent {
  componentDidMount() {
    AOS.init({
      delay: 300,
    });
  }

  render() {
    const videoList = videos.map(video => {
      return (
        <div data-aos="fade-in" key={video.title} className={styles.videoDiv}>
          <h3 id={styles.videoTitle}>{video.title}</h3>
          <iframe
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    });
    return (
        <div id="Videos" id={styles.videoContainer}>
          <h1 id={styles.videosTitle} data-aos="fade-in">
            {'< Videos />'}
          </h1>
          <div id={styles.videosDiv}>{videoList}</div>
        </div>
    );
  }
}
