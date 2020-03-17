import axios from 'axios'

import { errorMesage, getHeaders} from '../../utils/index'
import {CHAT_ENDPOINT} from '../../utils/urls'

export default {
    namespaced: true,
    state: {
        loading: false,
        chartIstance: {},
        error: ''
    },
    mutations: {
        SET_LOADING: (state, payload) => {
            state.loading = payload
        },
        SET_CHAT_INSTANCE: (state, payload) => {
            state.chartIstance.chatUrl = payload.uri
            state.chartIstance.members = payload.members
        },
        SET_ERROR:  (state, payload) => {
            state.chatUrl = payload
        },
    },
    getters: {
        GET_CHAT_INSTANCE: state => {
            return state.chartIstance
        }
    },
    actions:{
        RETRIEVE_USER_CHAT: async ({commit}, payload) =>{
            commit('SET_LOADING', true)

            await axios.post(CHAT_ENDPOINT, payload, {
                headers: getHeaders()
            }).then(response => {
                commit('SET_CHAT_INSTANCE', response.data)
            }).finally(
                commit('SET_LOADING', false)
            )
        }
    }
}
