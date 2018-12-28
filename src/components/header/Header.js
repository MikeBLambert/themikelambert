import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import styles from './Header.module.css';
import backgroundImage from '../../images/landing-image.jpg';

export default class Nav extends PureComponent {
  state = {};
  handleScroll = this.handleScroll.bind(this);

  handleScroll() {
    this.setState({ scrolledTo: window.scrollY });
  }

  componentDidMount() {
    const nav = document.querySelector('nav');
    const imageHeight = document.getElementById('landingImage').height;
    this.setState({ top: nav.offsetTop, height: nav.offsetHeight, imageHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scrolledTo > this.state.top && window.innerWidth > 699
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const links = ['About', 'Projects', 'Blog', 'Contact'];
    const listLinks = links.map((link, i) => {
      return (
        <Link key={i} to={link} className={styles.navLink}>
          {link}
        </Link>
      );
    });

    return (
      <div>
        <div id={styles.landing}>
          <img src={backgroundImage} alt="mountains" style={{height:`${this.state.imageHeight}`} }className={styles.landingImage} id="landingImage" />
          <div id={styles.hamburgerContainer}>
            <label id={styles.hamburgerLabel}>
              Checkbox for hamburger button
            </label>
            <input type="checkbox" id={styles.hamburgerInput} />
            <span className={styles.hamburgerSpan} />
            <div id={styles.mobileNav}>{listLinks}</div>
          </div>
          <h1 id={styles.landingTitle}>mikeLambert</h1>
        </div>

        <div id={styles.desktopNav}>
          <nav
            id={styles.navBar}
            className={
              this.state.scrolledTo > this.state.top ? styles.fixedNav : ''
            }
          >
            {listLinks}
          </nav>
        </div>
      </div>
    );
  }
}
