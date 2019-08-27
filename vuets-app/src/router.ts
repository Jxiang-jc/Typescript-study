import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Layout from './views/Layout/Index.vue';
import jwt_decode from 'jwt-decode';

Vue.use(Router);

/* 
 * hidden: true             如果hidden为true则在左侧菜单栏展示，否则不显示
 * name: 'router-name'      路由名称，必须填写
 * meta: {
 *   title: 'title',        对应路由在左侧菜单栏的标题名称
 *   icon: 'icon-class'     对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
 * }
*/

export const asyncRouterMap = [
    {
        path: '/',
        component: Layout,
        hidden: true,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: { title: '首页', icon: 'fa fa-home' },
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        hidden: false,
        meta: { title: '系统登陆' },
        component: () => import('@/views/Login/Login.vue')
    },
    {
        path: '/password',
        name: 'password',
        hidden: false,
        meta: { title: '找回密码' },
        component: () => import('@/views/Login/Password.vue')
    }
]

const router: any = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: asyncRouterMap
});

router.beforeEach((to: any, from: any, next: any) => {
    const isLogin: boolean = localStorage.tsToken ? true : false;
    if (to.path === '/login' || to.path === '/password') {
        next();
    } else {
        if (isLogin) {
            next();
        } else {
            next('/404'); // 没有权限登录
        }
    }
})

export default router;
