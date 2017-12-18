import Vue from 'vue';
import Router from 'vue-router';
import Routes from './routes';

Vue.use(Router);

const routes = Routes.routes;

export default new Router({
  routes,
  mode: 'history',
});
