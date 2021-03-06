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
      path: '/swiper',
      name: 'swiper',
      component: () => import('@/components/swiper')
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
    {
      path: '/xiala',
      name: 'xiala',
      component: () => import('@/components/xiala'),
    },
    {
      path: '/theTest',
      name: 'theTest',
      component: () => import('@/components/theTest')
    },
    {
      path: '/qiantaoluyou',
      name: 'qiantaoluyou',
      component: () => import('@/components/qiantaoluyou'),
      redirect: '/qiantaoluyou/xialaCh',//默认子路由
      children: [
        {
          path: 'xialaCh',
          name: 'xialaCh',
          component: () => import('@/components/qiantaoluyou/xialaCh'),
        },
        {
          path: 'xialaCh2',
          name: 'xialaCh2',
          component: () => import('@/components/qiantaoluyou/xialaCh2'),
        }
      ]
    },
    {
      path: '/copy',
      name: 'copy',
      component: () => import('@/components/copy')
    },
    {
      path: '/swiper2',
      name: 'swiper2',
      component: () => import('@/components/swiper2')
    },
    {
      path: '/fzxiala',
      name: 'fzxiala',
      component: () => import('@/components/fzxiala')
    },
    {
      path: '/suanfa',
      name: 'suanfa',
      component: () => import('@/components/suanfa')
    },
    {
      path: '/vuehexin',
      name: 'vuehexin',
      component: () => import('@/components/vuehexin')
    },
    {
      path: '/es6',
      name: 'es6',
      component: () => import('@/components/es6')
    },
  ]
})
