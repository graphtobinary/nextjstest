import React from 'react';
import { ImageWrapper, ImageType } from './Image.styles';

export interface ImageProps extends ImageType {
  onClick?(event: React.MouseEvent): void;
  imageLoaded?: Function;
  draggable?: boolean;
}

const Image: React.FunctionComponent<ImageProps> = ({
  src,
  height,
  width,
  name = 'rario-img',
  borderRadius,
  cursor,
  onClick,
  imageLoaded,
  draggable = false,
  loading = 'lazy',
  ...rest
}) => {
  return (
    <ImageWrapper
      loading={loading}
      onClick={onClick}
      onLoad={() => {
        imageLoaded && imageLoaded();
      }}
      alt={name}
      name={name}
      src={src}
      height={height as string}
      width={width as string}
      borderRadius={borderRadius}
      cursor={cursor}
      draggable={draggable}
      {...rest}
      priority={true}
    />
  );
};

export default Image;
