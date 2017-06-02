import Vue from 'vue';
import App from './popup/App.vue';
import store from './popup/store'
import router from './popup/router'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')