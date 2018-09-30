import Main from '@/view/main'

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/',
        name: 'index',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/view/home'),
                meta: {
                    hideInMenu: true,
                    notCache: true
                },
            }
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        component: () => import('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        component: () => import('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        component: () => import('@/view/error-page/404.vue')
    }
]
