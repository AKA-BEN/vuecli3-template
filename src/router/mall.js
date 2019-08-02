import Vue from 'vue'
import Router from 'vue-router'
import Guard from './guard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '我的首页'
      },
      component: () => import('@/modules/mall/index/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      meta: {
        title: 'demo'
      },
      component: () => import('@/modules/mall/demo/demo.vue')
    }
  ]
})

// 全局路由监听
router.beforeEach(Guard.beforeGlobal)

export default router
