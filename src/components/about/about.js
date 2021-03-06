import React from 'react';
import Code from './Code';
import Study from './Study';
import Travel from './Travel';
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
