<template>
    <div class="container">
    <h1>Bem-vindo ao Meu Blog</h1>
    <p>Explore os últimos posts abaixo.</p>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { posts } from '../data/posts';
import PostCard from '../components/PostCard.vue';
</script>
