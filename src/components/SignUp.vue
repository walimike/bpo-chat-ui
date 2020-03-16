<template>
    <div>
        <div class="container">
            <Navbar />
            <div class="row">
                <div class="col-sm-4">
                    <div class="alert alert-danger" v-show="error">{{error}}</div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" v-model="email" class="form-control" placeholder="enter your email" />
                    </div>
                    <div class="form-group">
                        <label>User name</label>
                        <input type="email" v-model="username" class="form-control" placeholder="enter your username" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="enter your password" />
                    </div>
                    <div class="form-group">
                        <label>Password Confirmation</label>
                        <input type="password" v-model="passwordConfirmation" class="form-control" placeholder="enter your password confirmation" />
                    </div>
                    <button type="button" @click="signUpUser" class="btn btn-primary">Sign up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'signUp',
    components: {
        Navbar
    },
    data(){
        return {
            email: '',
            username: '',
            password: '',
            passwordConfirmation: ''
        }
    },
    computed: {
        ...mapGetters({
            'user': 'users/GET_USER',
            'loading': 'users/GET_LOADING',
            'error': 'users/GET_ERROR'
        })
    },
    methods: {
        ...mapActions({
            'SignUpAction': 'users/SIGNUP_USER'
        }),
        signUpUser(){
            
            this.SignUpAction({
                email: this.email,
                username: this.username,
                password: this.password,
                password2: this.passwordConfirmation
            })
        }
    },
    watch: {
        error(oldValue, newValue){
            if(oldValue !== newValue){
                setTimeout(() => {
                    this.$store.commit('users/SET_ERROR', '')
                }, 3000)
            }
        }
    }
}
</script>

<style scoped>
    input{
        display: block;
    }
</style>