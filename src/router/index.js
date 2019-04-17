import Vue from 'vue'
import Router from 'vue-router'
import Guard from './guard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '我的首页'
      },
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      component: () => import('@/views/about/about.vue')
    }
  ]
})

// 全局路由监听
router.beforeEach(Guard.beforeGlobal)

export default router
