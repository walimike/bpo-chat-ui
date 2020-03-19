import axios from 'axios'

import { errorMesage, getHeaders} from '../../utils/index'
import {CHAT_ENDPOINT} from '../../utils/urls'

export default {
    namespaced: true,
    state: {
        loading: false,
        chatUri: '',
        members: '',
        error: '',
        messages: '',
        chatMate:''
    },
    mutations: {
        SET_LOADING: (state, payload) => {
            state.loading = payload
        },
        SET_CHAT_INSTANCE: (state, payload) => {
            state.chatUri = payload.uri
            state.members = payload.members
        },
        SET_ERROR:  (state, payload) => {
            state.chatUrl = payload
        },
        SET_CHAT_MESSAGES: (state, payload) =>{
            state.messages = payload
        },
        SET_CHAT_MATE: (state, payload) =>{
            state.chatMate = payload
        }
    },
    getters: {
        GET_CHAT_INSTANCE: state => {
            return state.chatUri
        },
        GET_CHAT_MESSAGES: state =>{
            return state.messages
        },
        GET_CHAT_MATE: state =>{
            return state.chatMate
        }
    },
    actions:{
        RETRIEVE_USER_CHAT: async ({commit}, payload) =>{
            commit('SET_LOADING', true)
            commit('SET_CHAT_MATE', payload)

            await axios.post(CHAT_ENDPOINT, payload, {
                headers: getHeaders()
            }).then(response => {
                commit('SET_CHAT_INSTANCE', response.data)
            }).finally(
                commit('SET_LOADING', false)
            )
        },
        SEND_CHART_MESSAGE: async ({commit}, payload) =>{
            // Expects {"message":"some message"}, {chartUri:"some characters"}
            commit('SET_LOADING', true)
            await axios.post(CHAT_ENDPOINT + payload.chatUri + '/messages/', payload, {
                headers: getHeaders()
            }).then(response => {
                commit('SET_CHAT_MESSAGES', response.data.messages)
            }).catch(error => {
                commit(console.log(error.response.data))
            }).finally(
                commit('SET_LOADING', false)
            )
        }
    }
}
