<template>
    <div>
        <div class="post-container" v-if="!failed">
            <h1>{{ post.title }}</h1>
            <div>
                {{ post.content }}
            </div>
        </div>
        <div v-if="failed">
            <p>Error!</p>
            {{ message }}
        </div>
    </div>
</template>

<script>
    import PostsList from './PostsList.vue'
    import PostStub from '../../stubs/posts'
    import * as api from '../../api'
    export default{
        data(){
            return{
                post: PostStub,
                failed: false,
                message: ''
            }
        },
        mounted(){
            api.posts.get({id: this.$route.params.id}).then((response) => {
                this.failed = false;
                this.post = response.data.data;
            },
            (response) => {
                this.failed = true;
                this.message = response.data.message;
                console.log('error');
            });
        },
        components: {
            PostsList
        }
    }
</script>
