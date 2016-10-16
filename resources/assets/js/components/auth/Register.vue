<template>
    <div class="col-sm-4 col-sm-offset-4">
        <form v-on:submit.prevent="submit" class="form-signin">
            <h2 class="form-signin-heading">Register</h2>

            <div class="form-group">
                <label for="inputName" class="sr-only">Name</label>
                <input v-model="user.name" type="text" id="inputName" class="form-control" placeholder="Name" required="" autofocus="">
            </div>
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input v-model="user.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="">
            </div>
            <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            </div>
            <div class="form-group">
                <label for="inputPasswordConfirmation" class="sr-only">Password</label>
                <input v-model="user.password_confirmation" type="password" id="inputPasswordConfirmation" class="form-control" placeholder="Password Confirmation" required="">
            </div>
            <div class="form-group">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        </form>
    </div>
</template>

<script type="text/babel">
    import UserStub from '../../stubs/users'
    import { mapActions } from 'vuex'
    export default{
        data(){
            return{
                user: {
                    name: '',
                    password: '',
                    password_confirmation: '',
                    email: ''
                },
                errors: {}
            }
        },
        methods: {
//            ...mapActions({
//                login :'login'
//            }),
            submit(){
                //this.$store.dispatch('login', this.user);
                this.register(this.user, '/');
            },
            register(creds, redirect) {
                this.$http.post('/api/register', creds).then((response) => {
                    localStorage.setItem('id_token', response.data.token);
                    this.user.authenticated = true;
                    if(redirect) {
                        this.$router.push(redirect)
                    }
                }, (response) => {

                });

            },

        },
        components: {}
    }
</script>
