import React, { useEffect } from 'react';
import AOS from 'aos';
import Code from './Code';
import Study from './Study';
import Travel from './Travel';
import 'aos/dist/aos.css';
import Intrapreneur from './Intrapreneur';
import Polyglot from './Polyglot';
import Headline1 from '../../common/text/Headline1';
import Page from '../../common/page/Page';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 300,
    });
  }, []);

  return (
    <Page>
      <Headline1 data-aos="fade-in">{'< About />'}</Headline1>
      <Code />
      <Study />
      <Intrapreneur />
      <Travel />
      <Polyglot />
    </Page>
  );
};

export default About;
