import * as types from '../mutation-types'

let maxToastId = 0;
//判断userhash是否存在
const state = {
    rrs: {
        list: []
    }
}
const getters = {
    ['getRRS'](state) {
        return state.rrs.list.reverse();
    }
}
const actions = {
    ['getRRS']({ commit }) {
        chrome.storage.sync.get('rrs', (result) => {
            if (result.rrs) {
                let rrsData = JSON.parse(result.rrs);
                commit('updateRRS', rrsData.list)
            }
        })
    }
}
const mutations = {
    ['updateRRS'](state, list) {
        state.rrs.list = list;
    },
    ['deleteRRS'](state, index) {
        state.rrs.list.splice(index, 1);
        chrome.storage.sync.set({ rrs: JSON.stringify({ list: state.rrs.list }) }, () => {})
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}