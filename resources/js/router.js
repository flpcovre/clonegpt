import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/components/screens/HomeScreen.vue';
import AboutScreen from '@/components/screens/AboutScreen.vue';
import ChatScreen from '@/components/screens/ChatScreen.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeScreen,
      meta: { title: 'New Chat' }
    },
    {
      path: '/about/:id?',
      name: 'about',
      component: AboutScreen,
      meta: { title: 'About Us' }
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatScreen,
      meta: { title: 'Conversations' }
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;