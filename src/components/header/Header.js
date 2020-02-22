import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { bool, number } from 'prop-types';
import styles from './Header.module.css';
import Img from 'gatsby-image';
import NavBar from './NavBar';

const Header = ({ isLandingImageDisplayed, isFixed, imageHeight }) => {
  const renderLandingImage = () => {
    if (!isLandingImageDisplayed) return null;

    return (
      <StaticQuery
        query={graphql`
          {
            file(relativePath: { eq: "landing-image.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 10000, maxHeight: 10000) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        `}
        render={data => (
          <div className={styles.landing}>
            <div className={styles.landingImage} id="landingImage">
              <Img
                fluid={data.file.childImageSharp.fluid}
                style={{ height: imageHeight }}
              />
            </div>
            <h1 className={styles.landingTitle}>mikeLambert</h1>
          </div>
        )}
      />
    );
  };
  return (
    <>
      {renderLandingImage()}
      <NavBar isFixed={isFixed} />
    </>
  );
};

Header.propTypes = {
  imageHeight: number,
  isFixed: bool,
  isLandingImageDisplayed: bool,
};

Header.defaultProps = {
  imageHeight: null,
  isFixed: true,
  isLandingImageDisplayed: false,
};

export default Header;
