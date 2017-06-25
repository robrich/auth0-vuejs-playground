import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Callback from '@/components/Callback';
import Logout from '@/components/Logout';
import Admin from '@/components/Admin';
import { isAuthenticated } from '../auth/authState';

Vue.use(Router);

function ensureAuthenticated(to, from, next) {
  if (!isAuthenticated()) {
    next({path:'/'}); // nope
  } else {
    next();
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // return from login
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: ensureAuthenticated
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

export default router;


