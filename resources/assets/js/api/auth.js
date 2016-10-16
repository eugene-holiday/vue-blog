export const auth = {
    login(creds) {
        return Vue.http.post('/api/login', creds);

    },
    check() {
        return Vue.http.get('/api/check');
    }
};
