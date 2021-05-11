import Vue from 'vue'
import Vuex from 'vuex'
// 全局载入组件
// 动态按需加载外部js组件 参考链接: https://www.cnblogs.com/zhuchenglin/p/7455203.html
Vue.component('remote-script', {
    render: function (createElement) {
        var self = this
        return createElement('script', {
            attrs: {
                type: 'text/javascript',
                src: this.src
            },
            on: {
                load: function (event) {
                    self.$emit('load', event)
                },
                error: function (event) {
                    self.$emit('error', event)
                },
                readystatechange: function (event) {
                    if (this.readyState === 'complete') {
                        self.$emit('load', event)
                    }
                }
            }
        })
    },
    props: {
        src: {
            type: String,
            required: true
        }
    }
})
Vue.use(Vuex)
// 初始化axios
require('./axios')

// 开启低端设备兼容
require('es6-promise').polyfill()

// 关闭框架控制台提示
Vue.config.productionTip = false
