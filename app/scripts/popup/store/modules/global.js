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
        chrome.cookies.get({
            url: 'https://h.nimingban.com',
            name: 'userhash'
        }, (cookie) => {
            if (cookie) {
                commit('setUser', cookie.value);
            } else {
                commit('setUser', null);
            }
        })
    }
}

const mutations = {
    ['setUser'](state, hash) {
        if (hash) {
            checkUserhash(hash);
            state.user = {
                hash,
                has: ture
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