import { createApp } from "vue";
import App from "./App.vue";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data';

const app = createApp(App)

// avails app routes
app.use(router);

// avails global events
app.config.globalProperties.$bus = $bus;

// avails access to global data store
app.config.globalProperties.$pages = $pages;

app.mount('#app');