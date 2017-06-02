import Vue from 'vue'
import Router from 'vue-router'

import Index from '../page/Index.vue'
import Setting from '../page/Setting.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'setting', path: '/setting', component: Setting }
    ]
})
export default router;