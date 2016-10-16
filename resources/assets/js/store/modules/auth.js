import * as api from '../../api'

export default {
    state: {
        user: {},
        authenticated: false
    },

    mutations: {
        setAuthenticatedUser(state, user) {
            state.user = user;
            state.authenticated = true;
        },
        logout(state, user) {
            state.user = {};
            state.authenticated = false;
        }
    },

    getters: {
        user(state, getters){
            return state.user;
        },
        authenticated(state){
            return state.authenticated;
        }
    },
    actions: {
        login( {commit, state}, user){
            api.auth.login(user).then((response) => {
                console.log('Set Store User');
                localStorage.setItem('id_token', response.data.token);
                commit('setAuthenticatedUser', response.data.user);
            }, () => {

            })
        }
    }
}



