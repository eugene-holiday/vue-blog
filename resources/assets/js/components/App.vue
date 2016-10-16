<template>
    <div>
        <navigation></navigation>

        <div id="app">
            <div class="container">
                <div class="row">
                    <transition name="fade" mode="out-in">
                        <router-view class="view"></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<script>
    import Navigation from './Navigation.vue'
    import * as api from '../api'
    import { mapMutations } from 'vuex'
    export default {
        mounted() {
            console.log('App started. Check Auth..');
            api.auth.check().then((response) => {
                console.log('Success');
                this.setAuthenticatedUser(response.data.user);
            }, () => {

            });

        },
        methods:{
            ...mapMutations({
                setAuthenticatedUser :'setAuthenticatedUser'
            }),
        },
        components:{
            Navigation
        }
    }
</script>
