import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/Login.vue')
        },
        {
            path: '*',
            name: 'notfound',
            component: () => import('@/components/Not_Found.vue')
        }
    ]
})

export const powerRoutes = [
    {
        path: '/index',
        name: 'index',
        redirect: '/index/home',
        component: () => import('@/components/Index.vue'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/pages/Home.vue')
            },
            {
                path: 'student',
                name: 'student',
                redirect: 'student/teachingplan',
                component: () => import('@/pages/student/Index.vue'),
                meta: { roles: 'S' },
                children: [
                    {
                        path: 'teachingplan',
                        name: 'teachingplan',
                        component: () => import('@/pages/student/TeachingPlan.vue')
                    },
                    {
                        path: 'courseschoose',
                        name: 'courseschoose',
                        component: () => import('@/pages/student/CoursesChoose.vue')
                    },
                    {
                        path: 'grades',
                        name: 'grades',
                        component: () => import('@/pages/student/Grades.vue')
                    }
                ]
            },
            {
                path: 'teacher',
                name: 'teacher',
                redirect: 'teacher/recordscore',
                component: () => import('@/pages/teacher/Index.vue'),
                meta: { roles: 'T' },
                children: [
                    {
                        path: 'recordscore',
                        name: 'recordscore',
                        component: () => import('@/pages/teacher/RecordScore.vue')
                    },
                    {
                        path: 'salary',
                        name: 'salary',
                        component: () => import('@/pages/teacher/Salary.vue')
                    }
                ]
            },
        ]
    },
]