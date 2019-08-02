/**
 * 配置文件
 */

import devConfig from './development'
import prodConfig from './production'

// 是否为开发环境
const ISDEV = process.env.NODE_ENV === 'development'

// 基础配置
const base = {
  apiBaseUrl: '/base_api'
}

export default Object.assign(base, ISDEV ? devConfig : prodConfig)
