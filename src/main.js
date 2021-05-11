import Vue from 'vue'
import store from '@/store'
import router from '@/runtime/router'
import App from './App.vue'
import { Toast, Dialog, Notify } from 'vant';
import {getDate} from "./js/common";
import vant from '@/runtime/vant'
import moment from "moment";
Vue.use(vant)
Vue.prototype.$toast = Toast
Vue.prototype.$toastLoading = function (msg) {
    Toast.loading({
        message: msg,
        duration: 0,
        forbidClick: true
    })
}
Vue.prototype.$hideLoading = function (msg) {
    Toast.clear()
}
Vue.prototype.$dialog = Dialog
Vue.prototype.$notify  = Notify
Vue.prototype.$ImgUrl = process.env.NODE_ENV == 'production' ? 'https://fslm.lqnsh.com/' : 'http://wx.tianqun.club/'
Vue.config.productionTip = false
Vue.prototype.$moment = moment;
Vue.prototype.$getDate = getDate

Vue.prototype.tolink = function (link) {
    this.$router.push({
        path: link
    })
}
Vue.prototype.setUrl = function (url) {
    if (!url) {
        return ''
    } else if (url.indexOf('http') > -1) {
        return url
    } else {
        return url
    }
}

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
