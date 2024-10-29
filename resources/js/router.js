import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/components/screens/HomeScreen.vue';
import AboutScreen from '@/components/screens/AboutScreen.vue';
import ChatScreen from '@/components/screens/ChatScreen.vue';

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
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatScreen 
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;