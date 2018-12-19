import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import LandingImage from './landingImage';
import { relative } from 'path';
import styles from './layout.module.css';

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
        <Header siteTitle={data.site.siteMetadata.title} />
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
