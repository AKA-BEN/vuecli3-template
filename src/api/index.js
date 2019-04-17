import { get, post } from '@/utils/axios'
import jsonp from '@/utils/jsonp'

export const getDemo = p => get('/demo/get', p)
export const postDemo = p => post('/demo/post', p)
export const jsonpDemo = () => {
  return jsonp('https://apis.map.qq.com/ws/location/v1/ip', {
    key: 'TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU',
    output: 'jsonp'
  })
}
