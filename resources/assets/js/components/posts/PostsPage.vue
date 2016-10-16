<template>
    <div class="col-sm-8 col-sm-offset-2">
        <h1>Posts Page</h1>
        <posts-list :posts="posts"></posts-list>
    </div>
</template>

<script>
    import PostsList from './PostsList.vue'
    import * as api from '../../api'
    export default{
        data(){
            return{
                posts: []
            }
        },
        mounted(){
            api.posts.get({ order: 'desc'}).then((response) => {
                this.posts = response.data.data;
            }, (response) => {
                // error callback
            });
        },
        components: {
            PostsList
        }
    }
</script>
