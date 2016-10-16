import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/auth'
import posts from './modules/posts'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        posts
    }
});

export default store;