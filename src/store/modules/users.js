import axios from 'axios';

import {errorMesage, getHeaders} from '../../utils/index'
import {SIGNUP_ENDPOINT, LOGIN_ENDPOINT} from '../../utils/urls'

export default {
    namespaced: true,
    state: {
        user: {},
        loading: false,
        error: '',
        token: '',
        users: {},
    },
    mutations: {
        SET_USER: (state, payload) => {
            state.user = payload
        },
        SET_TOKEN: (state, payload) => {
            state.token = payload
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload
        },
        SET_ERROR: (state, payload) => {
            state.error = payload
        },

        SET_USERS: (state, payload) => {
            state.users = payload
        }
    },
    getters: {
        GET_USER: state => {
            return state.user
        },
        GET_USERS: state => {
            return state.users
        },
        GET_LOADING: state => {
            return state.loading
        },
        GET_ERROR: state => {
            return state.error
        },
        GET_TOKEN: state => {
            return localStorage.getItem('authToken')
        }
    },
    actions: {
        LOGIN_USER: ({commit}, payload) => {
            commit('SET_LOADING', true)
            axios.post(LOGIN_ENDPOINT, payload, {
                headers: getHeaders()
            }).then(response => {
                commit('SET_USER', response.data)
                localStorage.setItem('authToken', response.data.access)
            }).catch(error => {
                commit('SET_ERROR', errorMesage(error.response.data))
            })
        },

        SIGNUP_USER: ({commit}, payload) => {
            commit('SET_LOADING', true)
            axios.post(SIGNUP_ENDPOINT, payload, {
                headers: getHeaders()
            }).then(response => {
                commit('SET_USER', response.data)
                localStorage.setItem('authToken', response.data.access)
            }).catch(error => {  
                commit('SET_ERROR', errorMesage(error.response.data))
            }).finally(
                commit('SET_LOADING', false)
            )
        },

        RETRIEVE_USERS: ({commit}) =>{
            commit('SET_LOADING', true)
            axios.get(SIGNUP_ENDPOINT, {
                headers: getHeaders()
            }).then(response =>{
                commit('SET_USERS', response.data)
            }).finally(

            )
        }
    }
}
