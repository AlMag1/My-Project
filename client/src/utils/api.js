import axios from 'axios';

const qs = require('qs');
const apiService = axios.create({});
const getURL = path => `http://localhost:3008/${path}`;
const token = localStorage.getItem('token');

const stringifyObj = obj => qs.stringify(obj, { indices: true, parameterLimit: 10000 });
const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
};

export const get = (path, params = {}) =>
  apiService.get(getURL(path), {
    params,
    headers: getHeaders(),
    paramsSerializer: params => stringifyObj(params)
  });

export const post = (path, params = {}) => {
  return apiService.post(getURL(path), params, { headers: getHeaders() });
};

export const put = (path, params = {}) =>
  apiService.put(getURL(path), params, {
    headers: getHeaders()
  });

export const deleteRequest = (path, params = {}) =>
  apiService.delete(getURL(path), { params, headers: getHeaders() });

export const upload = (path, params = {}, config) =>
  apiService.post(getURL(path), params, {
    headers: { ...getHeaders(), 'content-type': 'multipart/form-data' },
    ...config
  });

export const download = (path, params = {}, parsed) => {
  let config = {
    responseType: 'blob',
    params,
    headers: getHeaders()
  };
  if (parsed) {
    config = {
      ...config,
      paramsSerializer: params => stringifyObj(params)
    };
  }
  return apiService.get(getURL(path), config);
};
