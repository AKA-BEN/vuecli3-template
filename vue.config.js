// const U = require('./utils')
const path = require('path')

const ISDEV = process.env.NODE_ENV === 'development'
const resolve = dir => path.join(__dirname, dir)

const vueConfig = {

  // 页面模块
  pages: {
    community: {
      entry: 'src/modules/mall/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // community: {
    //   entry: 'src/modules/community/main.js',
    //   template: 'public/index.html',
    //   filename: 'community.html',
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'Index Page',
    // },
    // user: {
    //   entry: 'src/modules/user/main.js',
    //   template: 'public/index.html',
    //   filename: 'user.html',
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'user Page',
    // }
  },

  // 项目部署路径
  publicPath: ISDEV ? '/' : '/',

  // 生成资源 Hash文件名
  filenameHashing: true,

  // 生产环境的source map
  productionSourceMap: false,

  // eslint错误提示
  lintOnSave: ISDEV,

  // 开发服务配置
  devServer: {
    // 浏览器显示eslint错误提示
    overlay: {
      warnings: true,
      errors: true
    },
    // 服务器代理
    proxy: {
      '/api/config/1000003': {
        target: 'http://datamgr.teshehui.com',
        changeOrigin: true
      }
    }
  },

  css: {
    // css是否抽离js
    extract: true,
    // loaderOptions: {}
  },

  // 修改或添加 webpack粒度较细的配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@conf', resolve('config'))
      .set('@c', resolve('src/components'))
      .set('@ass', resolve('src/assets'))
  },

  // 修改或添加 webpack配置(返回的对象会被 webpack-merge 合并到最终的配置中)
  configureWebpack: config => {},

  pluginOptions: {
    // less全局应用
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [ resolve('src/assets/styles/variable.less') ]
    }
  }
}

module.exports = vueConfig
