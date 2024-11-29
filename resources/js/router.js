import { createRouter, createWebHistory } from 'vue-router';
import { authService } from '@/services/authService';

import HomeScreen from '@/components/screens/HomeScreen.vue';
import AboutScreen from '@/components/screens/AboutScreen.vue';
import ChatScreen from '@/components/screens/ChatScreen.vue';
import NotFoundScreen from '@/components/screens/NotFoundScreen.vue';
import LoginScreen from '@/components/screens/LoginScreen.vue';

const routes = [
    {
      path: '/login',
      name: 'login',
      component: LoginScreen,
      meta: { title: 'Sign In' }
    },
    {
      path: '/',
      name: 'home',
      component: HomeScreen,
      meta: { title: 'New Chat' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutScreen,
      meta: { title: 'About Us' }
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: ChatScreen,
      meta: { title: 'Conversations' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundScreen,
      meta: { title: '404' }
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
  if (!authService.isAuthenticated()) {
    document.title = 'Sign In';
  } else {
    document.title = to.meta.title;
  }
  next();
});

export default router;