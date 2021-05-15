import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '@/store/models/User';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
            authBlocked: true
        }
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: () => import('../views/Ranking.vue')
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import('../views/Help.vue')
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) =>
{
    const user = User.find(1);

    if (to.meta.authRequired && !user)
    {
        next({name: 'Login'});
        return;
    }

    if (to.meta.authBlocked && user)
    {
        next({name: 'Home'});
        return;
    }

    next();
});

export default router;
