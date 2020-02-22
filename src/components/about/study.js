import React from 'react';
import PageContent from '../../common/page/PageContent';
import { StaticQuery, graphql } from 'gatsby';
import ImageCardGroup from '../../common/card/ImageCardGroup';
import {
  StudyStylesMap,
  AosEffects,
  StudyTitlesMap,
} from '../../utils/constants';

export default function Study() {
  const getAosEffect = ({ index }) => {
    if (index % 2 === 0) return AosEffects.ZOOM_IN_LEFT;
    return AosEffects.ZOOM_IN_RIGHT;
  };

  const getImageStyle = ({ title }) => StudyStylesMap[title.toUpperCase()];

  const getTitle = ({ title }) => StudyTitlesMap[title.toUpperCase()];

  return (
    <PageContent header="{ Graduate }">
      <StaticQuery
        query={graphql`
          {
            allContentfulAsset(filter: { description: { eq: "studyLogo" } }) {
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
            cardHeight="250px"
            cardWidth="200px"
            getAosEffect={getAosEffect}
            getImageStyle={getImageStyle}
            getTitle={getTitle}
          />
        )}
      />
    </PageContent>
  );
}
