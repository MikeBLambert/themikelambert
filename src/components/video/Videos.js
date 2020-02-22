import React from 'react';
import { videos } from './fixtures/videoContent';
import 'aos/dist/aos.css';
import { AosEffects } from '../../utils/constants';
import Page from '../../common/page/Page';
import { Card } from '../../common/card/Card';
import Headline2 from '../../common/text/Headline2';
import useMediaQueries from '../../common/custom-hooks/useMediaQueries';

const Videos = () => {
  const [windowWidth] = useMediaQueries();
  const videoList = videos.map(video => {
    return (
      <Card scrollAnimation={AosEffects.FADE_IN} key={video.title}>
        <Headline2>{video.title}</Headline2>
        <iframe
          id="video-frame"
          style={{ margin: '30px' }}
          width={windowWidth > 750 ? '600' : '300'}
          height={windowWidth > 750 ? '400' : '250'}
          src={video.url}
          title={video.title}
          frameBorder="50"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Card>
    );
  });
  return <Page title="< Videos />">{videoList}</Page>;
};

export default Videos;
