import { demoHttp } from './axiosInstances'

export const getDemo = p => demoHttp('get', '/demo/get', p)
export const postDemo = p => demoHttp('post', '/demo/post', p)
