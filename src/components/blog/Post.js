import React from 'react';
import styles from './Post.module.css';

export default function BlogGoals({ title, url, alt, image }) {
  return (
    <div data-aos="zoom-in" id={styles.postContainer}>
      <a href={url}>
        <button id={styles.postButton}>Read Article</button>
      </a>
      <div id={styles.postTitleAndImage}>
        <h3 id={styles.postTitle}>{title}</h3>
        <img id={styles.postImage} src={image} alt={alt} />
      </div>
    </div>
  );
}
