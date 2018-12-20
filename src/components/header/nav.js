import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './nav.module.css';
import LandingImage from './landingImage';

export default class Nav extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
          fixedNav: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

  componentDidMount() {
        const nav = document.querySelector('nav');
        this.setState({top: nav.offsetTop, height: nav.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

  componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

  render() {

    const links = ['About', 'Projects', 'Blog', 'Contact'];
    const listLinks = links.map((link, i) => {
      return <a key={i} className={styles.navLink}>{link}</a>;
    })
    return (
      <div >
        <nav id={styles.navBar} className={this.state.scroll > this.state.top ? styles.fixedNav : ""}>
          {listLinks}
        </nav>
      </div>
    );
  }
}
