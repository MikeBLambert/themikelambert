import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './header/nav';
import LandingImage from './header/landingImage';
import styles from './layout.module.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './about/about';

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
      <div >
        <LandingImage id={styles.landingWithHeader}/>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <About />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
