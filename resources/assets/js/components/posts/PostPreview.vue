<template>
    <div class="post-preview_body">
        <h2>
            <router-link :to="{ name: 'post', params: { id: post.id }}">{{ post.title }}</router-link>
        </h2>
        <div>{{ post.content }}</div>
        <p>
            {{ post.created_at }}
        </p>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
        },
        props: ['post']
    }
</script>
