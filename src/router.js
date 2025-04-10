import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

import { defineAsyncComponent } from 'vue';

const Post = defineAsyncComponent({
  loader: () => import('./views/Post.vue'),
  loadingComponent: () => import('./components/Loading.vue'),
  errorComponent: () => import('./components/Error.vue'),
  delay: 200, // tempo para mostrar o loading (em ms)
  timeout: 5000, // tempo limite para abortar o carregamento
});

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post/:slug', name: 'Post', component: Post },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
{
    path: '/post/:slug',
    name: 'Post',
    component: () => import('./views/Post.vue'),
}
*/
