<script>
  import { butter } from '@/plugins/buttercms';

  export default {
    name: 'PostViewComponent',

    data() {
      return {
        post: {}
      }
    },

    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          }).catch(res => {
            console.log(res)
          })
      }
    },

    watch: {
      $route() {
        this.getPost()
      }
    },

    created() {
      this.getPost()
    }
  }
</script>

<template>
<v-row>
   <v-col> 
        <h1>{{ post.data ? post.data.title : ''}}</h1>
        <h4>
            {{ post.data ? post.data.author.first_name : '' }}
            {{ post.data ? post.data.author.last_name : '' }}
        </h4>
        <div class="responsive" v-html="post.data ? this.post.data.body : ''"></div>
    </v-col>
</v-row>
</template>

<style lang="scss" scoped>
.responsive {
  img {
    width: 100% !important;
    height: 100% !important;
  }
  width: 100% !important;
  height: 100% !important;
}
</style>