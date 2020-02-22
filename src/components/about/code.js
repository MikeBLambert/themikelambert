import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { CodeStylesMap, AosEffects } from '../../utils/constants';
import PageContent from '../../common/page/PageContent';
import ImageCardGroup from '../../common/card/ImageCardGroup';

const Code = () => {
  const getAosEffect = ({ index }) => {
    if (index % 2 === 0) return AosEffects.ZOOM_IN_LEFT;
    return AosEffects.ZOOM_IN_RIGHT;
  };

  const getImageStyle = ({ title }) => CodeStylesMap[title.toUpperCase()];

  const renderImageCardGroup = ({ data }) => {};

  return (
    <PageContent header="{ Software Engineer }">
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
        render={data => (
          <ImageCardGroup
            data={data.allContentfulAsset.nodes}
            getAosEffect={getAosEffect}
            getImageStyle={getImageStyle}
          />
        )}
      />
    </PageContent>
  );
};

export default Code;
