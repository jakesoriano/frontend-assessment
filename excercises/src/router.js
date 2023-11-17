import { createRouter, createWebHistory } from 'vue-router';
import Exercise1Page from '@/pages/Exercise1Page.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'exercise1',
      component: Exercise1Page,
    },
    {
      path: '/exercise2',
      name: 'exercise2',
      component: () => import('@/pages/Exercise2Page.vue'),
    },
  ],
});

export default router;
