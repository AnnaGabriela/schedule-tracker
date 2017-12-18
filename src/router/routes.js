import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const routes = [
  { name: 'login', path: '/', component: Login },
  { name: 'dashboard', path: '/dashboard', component: Dashboard },
  { path: '*', redirect: '/' },
];

export default { routes };
