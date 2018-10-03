import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import {getToken, getLockStatus, canTurnTo} from '@/libs/util'

Vue.use(Router)
const router = new Router({
    routes
})

router.addRoutes([{
    path: '/test',
    name: 'test',
    component: () => import('@/view/test'),
    meta: {
        hideInMenu: true,
        notCache: true
    }
}])

const LOCK_PAGE_NAME = 'lock_page'
const LOGIN_PAGE_NAME = 'login'
const IS_LOCKED = getLockStatus()

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    if (IS_LOCKED && to.name !== LOCK_PAGE_NAME) {
        next({replace: true, name: LOCK_PAGE_NAME})
    } else if (IS_LOCKED && to.name === LOCK_PAGE_NAME) {
        next(false)
    } else {
        const token = getToken()
        if (!token && to.name !== LOGIN_PAGE_NAME) {
            next({name: LOGIN_PAGE_NAME})
        } else if (!token && to.name === LOGIN_PAGE_NAME) {
            next()
        } else if (token && to.name === LOGIN_PAGE_NAME) {
            next({name: 'home'})
        } else {
            store.dispatch('getUserInfo').then(user => {
                //发现此处可以从store中生成菜单
                if (canTurnTo(to.name, user.access, routes)) {
                    next()
                } else {
                    next({replace: true, name: 'error_401'})
                }
            })
        }
    }
})

router.afterEach(to => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router
