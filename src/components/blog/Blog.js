import React, { PureComponent } from 'react';
import styles from './Blog.module.css';
import Post from './Post';
import { posts } from './fixtures/blogContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Blog extends PureComponent {
  componentDidMount() {
    AOS.init({
      delay: 300,
    });
  }
  render() {
    const postList = posts.map(post => {
      return (
        <Post
          title={post.title}
          url={post.url}
          alt={post.alt}
          image={post.image}
        />
      );
    });

    return (
      <div id="Blog" className={styles.blogContainer}>
        <h1 id={styles.blogTitle} data-aos="fade-in">
          {'< Blog />'}
        </h1>
        {postList}
      </div>
    );
  }
}
