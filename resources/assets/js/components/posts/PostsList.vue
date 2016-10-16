<template>
    <div class="posts-lists__container">
        <div v-for="post in posts" class="post_body">
            <post-preview :post="post"></post-preview>
        </div>
    </div>
</template>
<style>
    .posts-lists__container {

    }
</style>

<script>
    import PostPreview from './PostPreview.vue'
    export default{
        data(){
            return{

            }
        },
        mounted(){
        },
        props: ['posts'],
        components: {
            PostPreview
        }
    }
</script>
