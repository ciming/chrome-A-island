import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './popup/App.vue';
import Index from './popup/index.vue';

Vue.use(VueRouter);
const routes = [
    { path: '/', component: Index },
];
console.log(Index)

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')