const routes = [
    {
        path: '/contact',
        component: () => import('./components/contact.vue'),
        name: 'contact'
    },
    {
        path: '/h',
        component: () => import('./components/contact.vue'),
        name: 'home'
    }
];

export default routes;
