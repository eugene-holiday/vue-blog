import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter);

import App from './components/App.vue';
import PostsPage from './components/posts/PostsPage.vue';
import PostPage from './components/posts/PostPage.vue';
import PostEditPage from './components/posts/PostEditPage.vue';
import NotFoundError from './components/NotFoundError.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

const routes = [
    {
        path: '/', component: App,

        children: [
            { path: 'posts', component: PostsPage },
            { path: '/', component: PostsPage },
            {
                path: '/login',
                component: Login,
                name: 'login'
            },

            {
                path: '/register',
                component: Register,
                name: 'register'
            },

            {
                path: 'posts/:id(\\d+)/edit',
                component: PostEditPage,
                name: 'post-edit'
            },
            {
                path: 'posts/new',
                component: PostEditPage,
                name: 'post-new'
            },
            {
                path: 'posts/:id(\\d+)',
                component: PostPage,
                name: 'post'
            }
        ]
    },
    {
        path: '*', component: NotFoundError
    }
];

Vue.http.interceptors.push(function (request, next) {
    //Add JWT to all requests
    let token = localStorage.getItem('id_token');

    if (token) {
        request.headers.set('Authorization', 'Bearer ' + token);
    }
    next((response) => {
        console.log(response.status);
        if(response.status === 401) {
            console.log('TOKEN EXPIRED.. Trying refresh..');
            //store.commit('logout');

        }
    });
}.bind(this));

const router = new VueRouter({
    hashbang: false,
    mode: 'history',
    root: '/',
    routes: routes
});

export default router
