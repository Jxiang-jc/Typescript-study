import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            meta: { title: '系统登陆' },
            component: () => import('@/views/Login/Login.vue')
        },
        {
            path: '/password',
            name: 'password',
            meta: { title: '找回密码' },
            component: () => import('@/views/Login/Password.vue')
        }
    ]
});
//# sourceMappingURL=router.js.map