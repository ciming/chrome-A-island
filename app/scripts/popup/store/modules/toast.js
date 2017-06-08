import * as types from '../mutation-types'

let maxToastId = 0;
//判断userhash是否存在
const state = {
    toast: []
}
const getters = {
    ['toast'](state) {
        return state.toast
    }
}
const actions = {
    ['toast']({ commit }, text) {
        let id = ++maxToastId;
        commit('addToast', { id, text: text })
        setTimeout(() => commit('removeToast', id), 2000)
    }

}
const mutations = {
    ['addToast'](state, message) {
        state.toast.push(message)
    },
    ['removeToast'](state, id) {
        state.toast = state.toast.filter(m => m.id !== id)
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}