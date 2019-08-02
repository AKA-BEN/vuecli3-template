import { originalHttp } from './axiosInstances'
import jsonp from '@/utils/jsonp'

export const getOther = p => originalHttp('get', 'https://www.easy-mock.com/mock/5cb58a40649b1b6121ad40c3/example/demo/get', p)
export const getConfig = p => originalHttp('get', '/api/config/1000003', p)
export const postOther = p => originalHttp('post', 'https://www.easy-mock.com/mock/5cb58a40649b1b6121ad40c3/example/demo/post', p)
export const jsonpDemo = () => {
  return jsonp('https://apis.map.qq.com/ws/location/v1/ip', {
    key: 'TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU',
    output: 'jsonp'
  })
}
