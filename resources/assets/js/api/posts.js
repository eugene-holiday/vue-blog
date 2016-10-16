import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource);

export const posts = Vue.resource('/api/v1/posts{/id}');