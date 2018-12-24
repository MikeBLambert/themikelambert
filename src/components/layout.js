import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './header/Nav';
import LandingImage from './header/LandingImage';
import styles from './layout.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 300,
});

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <LandingImage id={styles.landingWithHeader} />
        <Nav siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
