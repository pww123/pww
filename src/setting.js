/**
 * 业务配置
 * */
const env = process.env.VUE_APP_URL;
//若env是development则是开发环境 若是production则是生产环境
const Setting = {
    /**
     * 基础配置
     * */
    // 是否检验token
    checkToken: false,
    // 路由模式，可选值为 history 或 hash
    routerMode: 'hash',
    // 页面切换时，是否显示模拟的进度条
    showProgressBar: true,
    // 接口请求地址
    // 192.168.30.75:8244
    apiBaseURL: env === 'development' ? 'http://192.168.30.23:8088/guess/':env === 'production'?'https://wxyhtst.urcb.com/transmsg/api/':'http://wx.zjjzfy.com/reconciliationApi/',
    // apiBaseURL: env === 'development' ? 'http://192.168.30.75:8244/':env === 'production'?'http://154.11.160.138:8245/':'http://154.11.160.138:8244/',
    // 接口请求返回错误时，弹窗的持续时间，单位：秒
    modalDuration: 3,
    // Cookies 默认保存时间，单位：天
    cookiesExpires: 1,
    withCredentials: true, // 允许cookie跨域
};

export default Setting;
