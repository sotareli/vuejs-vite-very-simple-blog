<template>
  <div v-if="post">
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <p class="text-gray-800">{{ post.content }}</p>
  </div>
  <div v-else>
    <p class="text-red-500">Post não encontrado.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);
</script>
