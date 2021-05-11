import vue from 'vue'
import vuex from 'vuex'

// 加载模块
import user from '@/store/modules/user'
// import jssdk from '@/store/modules/jssdk'
import app from '@/store/modules/app'

// 全局载入vuex
vue.use(vuex)

export default new vuex.Store({
    modules: {
        user,
        app
    }
})
