import Vue from 'vue'
import Router from 'vue-router'

import Index from '../page/index/Index.vue'
import Setting from '../page/setting/Index.vue'
import Cookie from '../page/Cookie/index.vue'
import Rrs from '../page/rrs/index.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'setting', path: '/setting', component: Setting },
        { name: 'cookie', path: '/cookie', component: Cookie },
        { name: 'rrs', path: '/rrs', component: Rrs }
    ]
})
export default router;