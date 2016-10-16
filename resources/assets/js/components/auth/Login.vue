<template>
    <div class="col-sm-4 col-sm-offset-4">
        <form v-on:submit.prevent="submit" class="form-signin">
            <h2 class="form-signin-heading">Please sign in</h2>
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input v-model="user.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            </div>
            <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            </div>
            <div class="form-group">
                <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
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
                user: UserStub,
                errors: {}
            }
        },
        methods: {
            ...mapActions({
                login :'login'
            }),
            submit(){
                this.login(this.user).then(() => {
                    this.$router.push('/');
                }, () => {

                });
            }
        },
        components: {}
    }
</script>
