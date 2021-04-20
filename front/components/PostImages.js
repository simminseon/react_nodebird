import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import { ImagesZoom } from './imagesZoom'

export const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = React.useState(false);

  const onZoom = React.useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = React.useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img role="presentation" style={{width: '50%', display: 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{width: '50%', display: 'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
      </>
    );
  }
  return (
    <>
      <img role="presentation" style={{width: '50%'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
      <div
        role="presentation"
        style={{ display: 'inline-block', width: '50%', textAlign: 'cemter', verticalAlign: 'middle' }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  )
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}