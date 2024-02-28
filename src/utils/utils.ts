import { CDN_ENDPOINT } from 'config';

export const getCDNUrl = (path: string) => {
  const platform = 'NATIVE_APP';
  return `${CDN_ENDPOINT}/${platform}${path}`;
};
