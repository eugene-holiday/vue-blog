<template>
    <div class="col-sm-8 col-sm-offset-2">
        <form v-on:submit.prevent="savePost">
            <div class="form-group">
                <label for="inputTitle">Title</label>
                <input v-model="post.title" type="text" class="form-control" id="inputTitle" aria-describedby="titleHelp" placeholder="">
                <small id="titleHelp" class="form-text text-muted">Title it.</small>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Content</label>
                <textarea v-model="post.content" class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>

            <div class="well">
                <div v-html="post.content"></div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <button :disabled="disableForm" class="btn btn-md btn-primary btn-block" type="submit">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import PostStub from '../../stubs/posts'
    import * as api from '../../api'
    export default{
        data(){
            return{
                post: PostStub,
                failed: false,
                message: '',
                disableForm: false
            }
        },
        mounted(){

        },
        methods:{
            savePost(){
                this.disableForm = true;
                api.posts.save(this.post).then((response) => {
                    this.$router.push({ name: 'post', params: { id: response.data.data.id }})
                }, (response) => {
                    this.disableForm = false;
                });
            }
        },
        components: {},
        beforeRouteLeave (to, from, next) {
            this.post = PostStub;
            this.disableForm = false;
            next();
        }
    }
</script>
