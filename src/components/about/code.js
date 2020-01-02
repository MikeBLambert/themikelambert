import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from './Code.module.css';
import { CodeStylesMap, AosEffects } from '../../utils/constants';
import Ripple from '../../common/ripple/Ripple';
import Headline2 from '../../common/text/Headline2';

const Code = () => {
  const getAosEffect = ({ index }) => {
    if (index % 2 === 0) return AosEffects.ZOOM_IN_LEFT;
    return AosEffects.ZOOM_IN_RIGHT;
  };

  const renderLogos = data => {
    if (!data) return null;
    return data.allContentfulAsset.nodes.map(({ title, file }, index) => {
      return (
        <div
          key={title}
          data-aos={getAosEffect({ index })}
          className={styles.logoDiv}
        >
          <img
            src={file.url}
            className={styles.logo}
            style={CodeStylesMap[title.toUpperCase()]}
          />
          <h4>{title}</h4>
        </div>
      );
    });
  };

  return (
    <div id={styles.codeContent}>
      <Headline2 data-aos="fade-in">{'{ Software Engineer }'}</Headline2>
      <Ripple data-aos="fade-in" />
      <div id={styles.allLogosDiv}>
        <StaticQuery
          query={graphql`
            {
              allContentfulAsset(filter: { description: { eq: "codeLogo" } }) {
                nodes {
                  title
                  file {
                    url
                  }
                }
              }
            }
          `}
          render={data => renderLogos(data)}
        />
      </div>
    </div>
  );
};

export default Code;
