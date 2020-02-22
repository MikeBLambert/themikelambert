import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Post from './Post';
import { navigate } from 'gatsby';
import Page from '../../common/page/Page';

const Blog = () => {
  const handlePostClick = ({ title }) => {
    navigate(`blog/${title.split(' ').join('-')}`);
  };

  const renderPostList = ({ allContentfulBlogPost }) =>
    allContentfulBlogPost.edges.map(
      ({ node: { id, title, imageAlt, image } }) => (
        <Post
          onClick={() => handlePostClick({ title })}
          key={id}
          title={title}
          alt={imageAlt}
          image={image.file.url}
        />
      )
    );

  return (
    <Page title="< Blog />">
      <StaticQuery
        query={graphql`
          {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  url
                  title
                  imageAlt
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => renderPostList(data)}
      />
    </Page>
  );
};

export default Blog;
