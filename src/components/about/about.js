import React, { Component } from 'react';
import Code from './Code';
import styles from './About.module.css';
import Study from './Study';
import Global from './Travel';
import AOS from 'aos';
import 'aos/dist/aos.css';

// export default function About() {
//   return (
//     <div className={styles.aboutContainer} id="About">
//       <h1 id={styles.aboutTitle} data-aos="fade-in">
//         {'< About />'}
//       </h1>
//       <Code />
//       <Study />
//       <Global />
//     </div>
//   );
// }


export default class About extends Component {

  componentDidMount() {
    AOS.init({
      delay: 300,
    });
  }
  render() {
    return (
      <div className={styles.aboutContainer} id="About">
        <h1 id={styles.aboutTitle} data-aos="fade-in">
          {'< About />'}
        </h1>
        <Code />
        <Study />
        <Global />
      </div>
    );
  }
}
