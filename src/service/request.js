import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
// 请求拦截
instance.interceptors.request.use((config) => config, (err) => Promise.reject(err));
// 响应拦截
instance.interceptors.response.use((res) => res.data, (err) => Promise.reject(err));

export default instance;
