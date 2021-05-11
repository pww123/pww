// 通用模块

const u = navigator.userAgent

export default {
    state: {
    // 浏览器支持
        browser: {
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, // 是否在iPhone中打开
            iPad: u.indexOf('iPad') > -1, // 是否在iPad中打开
            wechat: !!u.match(/MicroMessenger/i), // 是否在微信中打开
            weibo: !!u.match(/WeiBo/i), // 是否在微博中打开
            qq: !!u.match(/QQ/i) // 是否在QQ打开
        },
        // 页面语言
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        loadCustomerDetailStatus: true,
        loadCustomerSearchStatus: true,
    },
    mutations: {
    },
    actions: {},
    getters: {},
}
