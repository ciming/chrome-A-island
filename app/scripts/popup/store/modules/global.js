import * as types from '../mutation-types'

//判断userhash是否存在
const checkUserhash = function(hash) {
    let data = null;
    chrome.storage.sync.get('cookies', (result) => {
        console.log(result)
    })
}
const state = {
    user: {
        hash: '',
        has: false
    }
}
const getters = {
    ['getUser'](state) {
        return state.user
    }
}
const actions = {
    ['getUser']({ commit }) {
        console.log(types.UPDATE_COOKIE)
        chrome.cookies.get({
            url: 'https://h.nimingban.com',
            name: 'userhash'
        }, (cookie) => {
            if (cookie) {
                commit(types.UPDATE_COOKIE, cookie.value);
            } else {
                commit(types.UPDATE_COOKIE, null);
            }
        })
    }
}

const mutations = {
    [types.UPDATE_COOKIE](state, hash) {
        if (hash) {
            checkUserhash(hash);
            state.user = {
                hash,
                has: true
            }
        }
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}