import React from 'react';
import { arrayOf, object, string, func } from 'prop-types';
import styles from './ImageCardGroup.module.css';
import ImageCardLabel from '../text/ImageCardLabel';

const ImageCardGroup = ({
  data,
  cardWidth,
  cardHeight,
  getAosEffect,
  getImageStyle,
  getTitle,
}) => {
  if (!data) return;
  return (
    <div className={styles.imageCardContainer}>
      {data.map(({ title, file }, index) => (
        <div
          style={{ height: cardHeight, width: cardWidth }}
          className={styles.imageCard}
          data-aos={getAosEffect({ index })}
        >
          <img src={file.url} style={getImageStyle({ title })} />
          <ImageCardLabel>{getTitle({ title })}</ImageCardLabel>
        </div>
      ))}
    </div>
  );
};

ImageCardGroup.propTypes = {
  cardHeight: string,
  cardWidth: string,
  data: arrayOf(object),
  getImageStyle: func,
  getTitle: func,
};

ImageCardGroup.defaultProps = {
  cardHeight: '175px',
  cardWidth: '150px',
  data: [],
  getDataAosEffect: () => 'fade-in',
  getImageStyle: () => ({ width: '100px', paddingTop: '20px', margin: '0' }),
  getTitle: ({ title }) => title,
};

export default ImageCardGroup;
