import React from 'react';
import styles from './Blog.module.css';
import Post from './Post';
import { POST_1_TITLE, POST_1_URL, POST_1_ALT, POST_2_TITLE, POST_2_URL, POST_2_ALT} from './blogContent';
import POST_1_IMAGE from '../../images/blog/goals.png';
import POST_2_IMAGE from '../../images/blog/blended-mba.jpg';


export default function Blog() {
  return (
    <div id="Blog" className={styles.blogContainer}>
      <h1 id={styles.blogTitle} data-aos="fade-in">
          {'< Blog />'}
        </h1>
      <Post title={POST_1_TITLE} url={POST_1_URL} alt={POST_1_ALT} image={POST_1_IMAGE} />
      <Post title={POST_2_TITLE} url={POST_2_URL} alt={POST_2_ALT} image={POST_2_IMAGE} />
    </div>
  );
}
