# VUE多页面模块项目

> 基于 `Vue-Cli3` 的多页面模块开发项目基础搭建

## 项目搭建内容

+ 按业务模块拆分多个单页面应用
+ Axios请求模块基础封装、jsonp封装
+ 项目结构规范
+ 开发生产环境config配置区分
+ ...

## script命令
```
npm install         项目初始化
npm run dev         开发启动项目
npm run build       生产打包项目
npm run test        项目测试
npm run lint        eslint测试
```

## 项目结构
```

│  .browserslistrc                      兼容浏览器版本配置
│  .editorconfig                        编辑器格式配置
│  .eslintrc.js                         eslint配置
│  .gitignore                           git禁止跟踪提交配置
│  babel.config.js                      babel配置
│  jest.config.js
│  package-lock.json
│  package.json
│  postcss.config.js                    css兼容配置
│  README.md
│  vue.config.js                        vue-cli构建配置
│  
├─config
│      index.js                         开发生产环境配置变量文件入口
│      development.js                   开发环境配置变量
│      production.js                    生产环境配置变量
│      
├─dist                                  打包后的资源文件
│              
├─public
│      favicon.ico
│      index.html
│      
├─src
│  ├─api
│  │      axiosInstances.js             axios请求模块初始实例
│  │      index.js                      api请求接口文件
│  │      other.js
│  │      
│  ├─assets                             静态资源文件
│  │  │  
│  │  ├─images                          图片资源  
│  │  │       logo.png
│  │  │  
│  │  └─styles                          公共样式文件
│  │          base.less                 基础样式
│  │          variable.less             全局less变量（vue.config.js配置）
│  │          
│  ├─components
│  │  │  HelloWorld.vue
│  │  │  
│  │  └─layouts                         页面框架类型组件
│  │     
│  ├─modules
│  │  ├─community                       页面模块
│  │  │  │  App.vue
│  │  │  │  main.js                     页面模块入口
│  │  │  │  
│  │  │  ├─demo                         模块子级路由页面
│  │  │  │      demo.vue
│  │  │  │      demo.less
│  │  │  │      
│  │  │  └─index
│  │  │          index.vue
│  │  │          
│  │  └─user                            页面模块
│  │      │  App.vue
│  │      │  main.js
│  │      │      
│  │      └─index
│  │              
│  ├─router
│  │      community.js                  页面模块路由
│  │      guard.js                      路由守卫（router拦截）
│  │      user.js
│  │      
│  ├─store                              页面模块vuex
│  │      community.js
│  │      user.js
│  │      
│  └─utils
│          axiosBase.js                 axios请求基础封装
│          index.js                     公用工具类方法
│          jsonp.js                     jsonp请求封装
│          
├─tests
│          
└─utils                                 构建项目 公用工具类方法
        index.js

```
