// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './common/rem'
import './common/csscommon.css'//初始化css
import VueX from 'vuex'
import store from '../src/store'//
import MyAlert from '../src/assets/MyAlert/index'
// Vue.use(MyAlert)
Vue.prototype.$MyAlert = MyAlert
Vue.use(VueX)
import 'lib-flexible'
Vue.config.productionTip = false

//全局的路由导航守卫
router.beforeEach((to, from, next) => {
console.log(store.state,'state')
if (store.state.userInfo || to.path == '/') {
  next()
} else {
  next({
    path: '/'
  })
}
})
//刷新保存vuex的状态
if (sessionStorage.getItem("store")) {
  //修改状态值
  store.replaceState(
      Object.assign(
          {},
          store.state,
          JSON.parse(sessionStorage.getItem("store"))
      )
  );
  sessionStorage.removeItem("store")
}

//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})