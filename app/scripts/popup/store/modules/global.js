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
            if (fitterCookiesList.length > 0 || !hash) {
                return;
            } else {
                cookiesList.push({
                    name: getCoookieName(hash),
                    hash
                })
            }
        } else {
            if (hash) {
                cookiesList = [{
                    name: getCoookieName(hash),
                    hash
                }];
            }
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
                commit('updateCookie', cookie.value);
            } else {
                commit('updateCookie', null);
            }
        })
    },
    ['changeCookie']({ commit }, cookieHash) {
        chrome.cookies.set({
            url: 'https://h.nimingban.com',
            name: 'userhash',
            value: cookieHash
        }, (cookie) => {
            commit('updateCookie', cookieHash);
        })

    }
}

const mutations = {
    ['updateCookie'](state, hash) {
        if (hash) {
            state.user.cookie = hash;
        } else {
            state.user.cookie = '';
        }
        checkUserhash(hash);
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}