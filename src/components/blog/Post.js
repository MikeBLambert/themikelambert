import React from 'react';
import styles from './Post.module.css';
import { Card } from '../../common/card/Card';

const Post = ({ title, alt, image, onClick }) => {
  return (
    <Card scrollAnimation="zoom-in" onClick={onClick}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.ripple} />
      <div className={styles.content}>
        <img id={styles.postImage} src={image} alt={alt} />
      </div>
    </Card>
  );
};

export default Post;
