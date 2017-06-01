import Vue from 'vue';
import App from './popup/App.vue';
import router from './popup/router'


const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')