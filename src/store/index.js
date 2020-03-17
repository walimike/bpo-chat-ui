import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import chats from './modules/chats'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    getters: {},
    modules: {
        users,
        chats
    }
})

export default store
