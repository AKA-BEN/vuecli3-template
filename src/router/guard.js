// 路由拦截方法
const guard = {
  // 进入路由前全局拦截
  beforeGlobal: (to, from, next) => {
    // 更新页面标题
    if (to.meta.title) {
      document.title = to.meta.title
    }
    if (to.meta.toLogin) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
}

export default guard
