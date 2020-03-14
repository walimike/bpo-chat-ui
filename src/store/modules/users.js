import axios from 'axios';
import errorMesage from '../../utils/index'

export default {
    namespaced: true,
    state: {
        user: {},
        loading: false,
        error: '',
        token: ''
    },
    mutations: {
        SET_USER: (state, payload) => {
            state.user = payload
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload
        },
        SET_ERROR: (state, payload) => {
            state.error = payload
        }
    },
    getters: {
        GET_USER: state => {
            return state.user
        },
        GET_LOADING: state => {
            return state.loading
        },
        GET_ERROR: state => {
            return state.error
        }
    },
    actions: {
        LOGIN_USER: ({commit}, payload) => {
            commit('SET_LOADING', true)
            console.log(payload);
            
            axios.post(`http://127.0.0.1:8000/api/v1/users/login/`, payload, {
                header: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
                
                commit('SET_USER', response.data)
                commit('SET_LOADING', false)
            })
        },

        SIGNUP_USER: ({commit}, payload) => {
            console.log(payload);
            
            commit('SET_LOADING', true)
            axios.post(`http://127.0.0.1:8000/api/v1/users/signup/`, payload, {
                header: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                commit('SET_USER', response.data)
            }).catch(error => {
                commit('SET_ERROR', errorMesage(error.response.data))
            }).finally(
                commit('SET_LOADING', false)
            )
        }
    }
}
