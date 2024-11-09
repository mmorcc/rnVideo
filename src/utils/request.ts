/*
 * @Author: 刘利军
 * @Date: 2020-11-03 10:12:34
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 21:01:30
 * @Description:
 * @PageName:
 */

import axios from 'axios';
import {BASE_URL} from '../core/constants';
import {getLoginData} from '../core/hooks';

export const post = async <T = any>(
  path: string,
  data?: {[key: string]: any},
): Promise<{
  code: number;
  count: number;
  message: string;
  data?: T;
}> => {
  return axios({
    method: 'post',
    baseURL: BASE_URL,
    url: path,
    data,
  });
};

export const get = async <T = any>(
  path: string,
  params?: {[key: string]: any},
): Promise<{
  code: number;
  count: number;
  message: string;
  data?: T;
}> => {
  return axios({
    method: 'get',
    baseURL: BASE_URL,
    url: path,
    params,
  });
};

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    const token = getLoginData()?.token || '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

// 默认axios
export default axios;
