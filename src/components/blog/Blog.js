import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Post from './Post';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { navigate } from 'gatsby';
import Headline1 from '../../common/text/Headline1';
import Page from '../../common/page/Page';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
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
    <Page>
      <Headline1 data-aos="fade-in">{'< Blog />'}</Headline1>
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
