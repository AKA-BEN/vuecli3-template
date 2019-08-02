import Vue from 'vue'
import Router from 'vue-router'
import Guard from './guard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/user.html',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: 'user首页'
      },
      component: () => import('@/modules/user/index/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      meta: {
        title: 'user demo'
      },
      component: () => import('@/modules/user/demo/demo.vue')
    }
  ]
})

// 全局路由监听
router.beforeEach(Guard.beforeGlobal)

export default router
