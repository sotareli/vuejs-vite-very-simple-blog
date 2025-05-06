<template>
  <div class="container" v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="meta"> {{ post.content }}</p>
  </div>
  <div class="container" v-else>
    <p class="error">Post não encontrado.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);
</script>


<style scoped>

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #66c6e9;
}

</style>

