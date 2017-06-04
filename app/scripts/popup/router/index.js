import Vue from 'vue'
import Router from 'vue-router'

import Index from '../page/Index.vue'
import Setting from '../page/Setting.vue'
import Cookie from '../page/Cookie.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        { name: 'index', path: '/', component: Index, redirect: '/cookie' },
        { name: 'setting', path: '/setting', component: Setting },
        { name: 'cookie', path: '/cookie', component: Cookie }
    ]
})
export default router;