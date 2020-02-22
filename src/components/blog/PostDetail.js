import React from 'react';
import { options } from '../../common/rich-text-renderer/RichTextRenderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './PostDetail.module.css';
import Layout from '../layout';

const PostDetail = ({ pageContext: { title, article } }) => {
  return (
    <Layout>
      <div className={styles.postDetailContainerOuter}>
        <div className={styles.postDetailContainerInner}>
          <h1 className={styles.postDetailTitle}>{title}</h1>
          <div className={styles.ripple} />
          <div>{documentToReactComponents(article.json, options)}</div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
