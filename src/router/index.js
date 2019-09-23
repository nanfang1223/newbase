import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import vuexs from '@/components/vuexs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuexs',
      name: 'vuexs',
      component: () => import('@/components/vuexs')//当组建页面过多时，这种方面调用路径之后才加载组件，节省资源
    },
    {
      path: '/wangluoyouhua',
      name: 'wangluoyouhua',
      component: () => import('@/components/wangluoyouhua')
    },
    {
      path: '/imgyujiazai',
      name: 'imgyujiazai',
      component: () => import('@/components/imgyujiazai')
    },
    {
      path: '/neiqian',
      name: 'neiqian',
      component: () => import('@/components/neiqain')
    },
    {
      path: '/biaodan',
      name: 'biaodan',
      component: () => import('@/components/biaodan')
    },
  ]
})
