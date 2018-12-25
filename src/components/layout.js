import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header/Header';
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
        <Header id={styles.landingWithHeader} siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
