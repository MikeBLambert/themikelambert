import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from './Blog.module.css';
import Post from './Post';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Blog extends PureComponent {
  async componentDidMount() {
    AOS.init({
      delay: 100,
    });
  }

  renderPosts = ({allContentfulBlogPost, allContentfulAsset}) => allContentfulBlogPost.nodes.map(({title, imageAlt, url}, index) => console.log(allContentfulBlogPost)||<Post
    key={title}
        title={title}
        url={url}
        alt={imageAlt}
        image={allContentfulAsset.nodes[index].file.url}
      />
  )

  render() {
    return (
      <div id="Blog" className={styles.blogContainer}>
        <h1 id={styles.blogTitle} data-aos="fade-in">
          {'< Blog />'}
        </h1>
        <StaticQuery
          query={graphql`
          {
            allContentfulBlogPost {
              nodes {
                title
                imageAlt
                createdAt
                url
              }
            }
            allContentfulAsset {
              nodes {
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
          `
          }
          render={(data) => this.renderPosts(data)}
        />
      </div>
    );
  }
}
