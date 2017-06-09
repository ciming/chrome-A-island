import { getCoookieName } from '../../utiles'
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
                commit('setCookieList', cookiesData.list)
            }
        })
    },
    ['addCookie']({ commit, state, dispatch }, cookieHash) {
        return new Promise((resolve, reject) => {
            let filterList = state.cookies.list.filter(item => {
                return item.hash === cookieHash;
            })
            console.log(filterList.length === 0)
            if (filterList.length === 0) {
                commit('addCookie', cookieHash);
                dispatch('changeCookie', cookieHash);
                resolve()
            } else {
                reject()
            }
        })

    }
}
const mutations = {
    ['setCookieList'](state, list) {
        state.cookies = {
            list,
            loaded: true
        }
    },
    ['addCookie'](state, cookieHash) {
        state.cookies.list.push({
            name: getCoookieName(cookieHash),
            hash: cookieHash
        })
        chrome.storage.sync.set({ cookies: JSON.stringify({ list: state.cookies.list }) }, () => {
            console('保存成功')
        })
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}