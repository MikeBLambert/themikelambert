import React from 'react';
import styles from './Post.module.css';

const Post = ({ title, url, alt, image })  => {
  return (
    <div data-aos="zoom-in" id={styles.postContainer}>
      <div id={styles.postTitleAndImage}>
        <h3 id={styles.postTitle}>{title}</h3>
        <img id={styles.postImage} src={image} alt={alt} />
      </div>
      <a href={url}>
        <button id={styles.postButton}>Read Article</button>
      </a>
    </div>
  );
}

export default Post;