
// 是否为开发环境
const ISDEV = true

// 基础配置
const base = {
  baseUrl: '/base_api'
}

// 开发环境配置
const dev = {
  baseUrl: 'https://www.easy-mock.com/mock/5cb58a40649b1b6121ad40c3/example'
}

// 生产环境配置
const prod = {
  baseUrl: '/pro_api'
}

const envConfig = ISDEV ? dev : prod
export default Object.assign(base, envConfig)
