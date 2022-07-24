import Vue from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
import { powerRoutes } from "./router";
// 引入vuex
import store from './store/index.js'

// 引入公共css样式
import './assets/common.css'

import '@/mock/index'

// 动态路由
router.beforeEach((to, from, next) => {
  // 判断有无登录
  // 已登录
  if (store.state.roles) {
    // 判断有无动态路由
    // 有动态路由直接放行
    if (store.state.newRoutes.length !== 0) {
      next()
    } else {
      let newroutes
      // 没有动态路由就根据角色创建
      if (store.state.roles == 'A') {
        newroutes = powerRoutes
      } else {
        let newChildren = powerRoutes[0].children.filter(item => {
          if (item.meta) {
            if (store.state.roles == item.meta.roles) {
              return true
            } else {
              return false
            }
          } else {
            return true
          }
        })
        newroutes = powerRoutes
        newroutes[0].children = newChildren
      }
      router.addRoutes(newroutes);
      store.commit('updateNewRoutes', newroutes)
      next({ ...to, replace: true })
    }
  } else {
    // 未登录

    // 是否去登录页
    // 去登陆页
    if (['/login'].indexOf(to.path) !== -1) {
      next()
    } else {
      // 不去登陆页（强制登录页） 
      next('/login')
    }
  }
})

Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
