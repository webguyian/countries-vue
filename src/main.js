import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from './const';
import App from './App.vue';
import CountryDetail from './components/CountryDetail.vue';
import CountryList from './components/CountryList.vue';
import './style.css';

const routes = [
  { path: ROUTES.home.path, name: ROUTES.home.name, component: CountryList },
  {
    path: ROUTES.detail.path,
    name: ROUTES.detail.name,
    component: CountryDetail
  }
];

const router = createRouter({
  history: createWebHistory('/countries-vue/'),
  routes
});

createApp(App).use(router).mount('#app');
