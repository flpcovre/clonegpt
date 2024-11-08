import './bootstrap';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createApp } from 'vue';
import router from './router';
import App from './app.vue';

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
    },
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app');
