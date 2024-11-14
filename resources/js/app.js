import './bootstrap';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import vuetify from '@/plugins/vuetify';

import { createApp } from 'vue';
import router from './router';
import App from './app.vue';

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app');
