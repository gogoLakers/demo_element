import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: sessionStorage.getItem('username'),
        roles: sessionStorage.getItem('roles'),
        routeInfo: [],
        newRoutes: []
    },
    mutations: {
        updataUserinfo(state, userinfo) {
            state.username = userinfo.username
            state.roles = userinfo.roles
            sessionStorage.setItem('username', userinfo.username)
            sessionStorage.setItem('roles', userinfo.roles)
            if (state.roles == "A") {
                state.routeInfo = [
                    { id: 1, label: '首页', path: '/index/home' },
                    { id: 2, label: '教师', path: '/index/teacher' },
                    { id: 3, label: '学生', path: '/index/student' }
                ]
            } else if (state.roles == "T") {
                state.routeInfo = [
                    { id: 1, label: '首页', path: '/index/home' },
                    { id: 2, label: '教师', path: '/index/teacher' },
                ]
            } else {
                state.routeInfo = [
                    { id: 1, label: '首页', path: '/index/home' },
                    { id: 3, label: '学生', path: '/index/student' },
                ]
            }
        },
        updateNewRoutes(state, routes) {
            state.newRoutes = routes
        },
        updateLogout(state) {
            state.username = ''
            state.roles = ''
            state.newRoutes = []
            state.routeInfo = []
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('roles')
            location.reload()
        }
    },
})