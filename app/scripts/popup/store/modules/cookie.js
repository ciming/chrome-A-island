import * as types from '../mutation-types'

//判断userhash是否存在
const state = {
    cookies: {
        list: [],
        loaded: false
    }
}
const getters = {
    ['getCookies'](state) {
        return state.cookies
    }
}
const actions = {
    ['getCookieList']({ commit }) {
        chrome.storage.sync.get('cookies', (result) => {
            if (result.cookies) {
                let cookiesData = JSON.parse(result.cookies);
                commit(types.SET_COOKIE_LIST, cookiesData.list)
            }
        })
    },
    ['addCookie']({ commit }, cookieHash) {

    }
}
const mutations = {
    [types.SET_COOKIE_LIST](state, list) {
        state.cookies = {
            list,
            loaded: true
        }
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}