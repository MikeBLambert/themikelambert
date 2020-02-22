import React from 'react';
import { Card } from '../../common/card/Card';
import Headline2 from '../../common/text/Headline2';
import styles from './Post.module.css';
import { string, func } from 'prop-types';

const Post = ({ title, alt, image, onClick }) => {
  return (
    <Card scrollAnimation="zoom-in" onClick={onClick} isInteractive>
      <Headline2>{title}</Headline2>
      <img className={styles.postImage} src={image} alt={alt} />
    </Card>
  );
};

Post.propTypes = {
  title: string.isRequired,
  alt: string.isRequired,
  image: string.isRequired,
  onClick: func.isRequired,
};

export default Post;
