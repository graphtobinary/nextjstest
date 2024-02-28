const config = {
  api: {
    // baseUrl: process.env.REACT_APP_BASEURL,
  },

  auth: {
    timeout: 30,
  },
  BASE_API_URL: process.env.BASE_API_ENDPOINT,
  POLLING_INTERVAL: 10000,
  MAX_POLLING_API_CALLS: 30,
  CDN_ENDPOINT: process.env.CDN_ENDPOINT,
};

export const SEO_MAP_ID = process.env.SEO_MAP_ID || '';
export const CDN_ENDPOINT = config.CDN_ENDPOINT;

export default config;
