/**
 * 开发配置
 * */

const env = process.env.VUE_APP_URL;
const Setting = {
    // 部署应用包时的基本 URL
    publicPath: './',
    // 生产环境构建文件的目录名
    outputDir: env === 'development' ? 'devDist' : env === 'production'? 'dist': env === 'test'?'testDist':'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 开发环境每次保存时 lint 代码，会将 lint 错误输出为编译警告
    // true || false || error
    lintOnSave: true,
    productionSourceMap: false, // 是否开启map
    port: 8080 // 运行端口

};

module.exports = Setting;
