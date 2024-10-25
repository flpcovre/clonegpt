import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/components/screens/HomeScreen.vue';
import AboutScreen from '@/components/screens/AboutScreen.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeScreen
    },
    {
      path: '/about/:id?',
      name: 'about',
      component: AboutScreen
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;