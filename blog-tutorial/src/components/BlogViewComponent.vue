<script>
import { butter } from "@/plugins/buttercms";

export default {
  name: "BlogViewComponent",
  data() {
    return {
      page_title: "Lista de Publicaciones",
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list()
        .then(res => {
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<template>
  <div id="blog-home">
    <h1>{{ page_title }}</h1>
    <v-card
      class="mx-auto"
      max-width="400"
      v-for="(post,index) in posts"
      :key="post.slug + '_' + index"
    >
      <router-link :to="'/blog/' + post.slug">
        <v-img
          class="white--text align-end"
          height="200px"
          v-if="post.featured_image"
          :src="post.featured_image"
        >
          <v-card-title>{{ post.title }}</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <p>{{ post.summary }}</p>
        </v-card-text>
      </router-link>
    </v-card>
  </div>
</template>