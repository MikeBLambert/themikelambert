import React from 'react';
import Code from './Code';
import Study from './Study';
import Travel from './Travel';
import Intrapreneur from './Intrapreneur';
import Polyglot from './Polyglot';
import Page from '../../common/page/Page';

const About = () => {
  return (
    <Page title="< About />">
      <Code />
      <Study />
      <Travel />
    </Page>
  );
};

export default About;
