import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './header/Nav';
import LandingImage from './header/LandingImage';
import styles from './layout.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './about/About';
import Projects from './projects/Projects';
import Blog from './blog/Blog';
import Contact from './contact/Contact';

AOS.init();

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
      <div>
        <LandingImage id={styles.landingWithHeader} />
        <Nav siteTitle={data.site.siteMetadata.title} />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
