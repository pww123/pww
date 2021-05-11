import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Setting from '@/setting';

/**
 * 路由懒加载参考
 * 文档地址: `https://router.vuejs.org/zh-cn/advanced/lazy-loading.html`
 * 例子: `component: () => import('@/pages/HelloWorld')`
 */

Vue.use(VueRouter)

const router = new VueRouter({
    mode: Setting.routerMode, // 路由模式 hash 有锚点 history 无锚点,
    routes: require('@/config/router').default
})

console.log(Setting.checkToken)

// 路由前置检测
router.beforeEach((to, from, next) => {
    // 如果没有自定义授权, 则默认强制授权
    if (!Setting.checkToken) {
        return next() // 去除登录授权
    } else {
        if (typeof to.meta.authorize === 'undefined') {
            to.meta.authorize = true
        }
        // 如果不需要授权, 直接进页面
        if (!to.meta.authorize) {
            return next()
        }
    // 执行登陆逻辑
    // store.dispatch('check_authorize').then(() => { // 授权成功后
    //   next()
    // }).catch(() => { // 未登录跳转授权地址
    //   store.dispatch('redirect_authorize')
    // })
    }
})

// 路由后置检测
router.afterEach((to, from) => {
    // 路由后置检测
})

export default router
