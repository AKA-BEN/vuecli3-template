/**
 *  Axios请求实例
 */

import CONF from '@conf/index'
import AxiosBase from '@/utils/axiosBase'
import QS from 'qs'

// 原始配置的请求实例
export const originalHttp = new AxiosBase({
  timeout: 5000
}).init()

// demo的请求实例
export const demoHttp = new AxiosBase({
  baseURL: CONF.apiBaseUrl,
  timeout: 100000
}, {
  req: config => {
    // 在发送请求之前做些什么
    // let TOKEN_KEY = 'TOKEN_KEY_345349'
    // if (TOKEN_KEY) {
    //   config.headers['x-access-token'] = TOKEN_KEY
    // }
    if (/put|post|patch/.test(config.method)) {
      config.data = QS.stringify(config.data)
    }
    return config
  },
  reqErr: err => {
    // 对请求错误做些什么
    return Promise.reject(err)
  },
  res: res => {
    return res
  },
  resErr: err => {
    return Promise.reject(err)
  }
}).init()
