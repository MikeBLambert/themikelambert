import React from 'react';
import { Card } from '../../common/card/Card';
import Headline2 from '../../common/text/Headline2';
import styles from './Post.module.css';

const Post = ({ title, alt, image, onClick }) => {
  return (
    <Card scrollAnimation="zoom-in" onClick={onClick} isInteractive>
      <Headline2>{title}</Headline2>
      <img className={styles.postImage} src={image} alt={alt} />
    </Card>
  );
};

export default Post;
