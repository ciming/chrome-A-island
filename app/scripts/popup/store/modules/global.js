import * as types from '../mutation-types'
import { getCoookieName } from '../../utiles'
//判断userhash是否存在
const checkUserhash = function(hash) {
    chrome.storage.sync.get('cookies', (result) => {
        let cookiesList = [];
        if (result.cookies) {
            let cookieData = JSON.parse(result.cookies);
            cookiesList = cookieData.list;
            let fitterCookiesList = cookiesList.filter((item) => {
                return item.hash === hash
            })
            if (fitterCookiesList.length > 0) {
                return;
            } else {
                cookiesList.push({
                    name: getCoookieName(hash),
                    hash
                })
            }
        } else {
            cookiesList = [{
                name: getCoookieName(hash),
                hash
            }]
        }
        chrome.storage.sync.set({ cookies: JSON.stringify({ list: cookiesList }) }, () => {
            chrome.storage.sync.get('cookies', (result) => {
                console.log(result)
            })
        })
    })
}
const state = {
    user: {
        cookie: ""
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
            state.user.cookie = hash;
            checkUserhash(hash);
        }
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}