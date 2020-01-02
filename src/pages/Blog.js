import React from 'react';
import Layout from '../components/layout';
import Blog from '../components/blog/Blog';

const BlogPage = () => (
  <Layout showLandingImage={false}>
    <Blog />
  </Layout>
);

export default BlogPage;
