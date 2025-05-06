<template>
  <div class="card">
    <router-link :to="`/post/${post.slug}`"> 
      <h2>
        {{ post.title }}
      </h2>
      Leia Mais
    </router-link>
    <p>{{ post.description }}</p>
    <hr />
  </div>
</template>

<script setup>
defineProps({ post: Object });
</script>
