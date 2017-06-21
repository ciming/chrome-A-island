import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import cookie from './modules/cookie'
import toast from './modules/toast'
import rrs from './modules/rrs'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        cookie,
        global,
        toast,
        rrs
    }
})