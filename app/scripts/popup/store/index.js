import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import cookie from './modules/cookie'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        cookie,
        global
    }
})