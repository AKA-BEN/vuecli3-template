import Axios from 'axios'
import QS from 'qs';
import CONF from '@conf/index'

const instance = Axios.create({
  baseURL: CONF.baseUrl,
  timeout: 5000,
  headers: {}
})
instance.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  if ('TOKEN_KEY') {
    config.headers['x-access-token'] = 'TOKEN_KEY'
  }
  return config;
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err);
});

// 添加响应拦截器
instance.interceptors.response.use(res => {
  // 对响应数据做点什么
  return res;
}, err => {
  // 对响应错误做点什么
  return Promise.reject(err);
});


/**
  * get方法，对应get请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function post(url, params) {
  return new Promise((resolve, reject) => {
      instance.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
