import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'
import Setting from '@/setting';
import qs from "qs";
import { Toast } from 'vant'
/**
 * axios参数
 * 文档地址: `https://blog.csdn.net/binginsist/article/details/65630547`
 */
// console.log(Setting.apiBaseURL)
// axios.defaults.baseURL = Setting.apiBaseURL
// axios.defaults.withCredentials = Setting.withCredentials
axios.defaults.baseURL = '/'
axios.defaults.withCredentials = Setting.withCredentials
// 监听发送请求
axios.interceptors.request.use((options) => {
    // 如果已经授权过了, 下次请求自动带上token
    var token = localStorage.getItem('access_token')
    if (token) {
        options.headers['X-Token'] = token
    } else {
        localStorage.removeItem(`access_token`)
    }
    // 新版本接口签名
    // options = doSign(options)
    return options
}, (error) => {
    return Promise.reject(error)
})
// 监听请求返回消息
// axios.interceptors.response.use((response) => {
//     return response.data
// }, (error) => {
//     if (error.response.status === 401) {
//     // 401状态 为 授权过期 或 未授权
//         return store.dispatch('redirect_authorize').then((resp) => {
//             return error.response.data
//         })
//     } else if (error.response.status === 400) {
//         return Promise.reject(error.response.data.reason || '未知错误')
//     }
//     return Promise.reject(error)
// })
//
// Vue.use(VueAxios, axios)

export const Requset = function(configObj){

    let {
        method = 'GET',
        params = {},
        data = {},
        timeout = 5000,
        errorToast = true,
        headers = {
            'Content-Type': 'application/json'
        },
        type = 'json'
    } = configObj;

    return new Promise(function (resolve,reject) {
        if (type === 'form') {
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        if (method === 'get' || method === 'GET') {
            params = data
        }
        axios({
            url:configObj.url,
            transformRequest: (data, headers) => {
                switch (headers["Content-Type"]) {
                case "application/x-www-form-urlencoded":
                    return qs.stringify(data);
                case "multipart/form-data":
                    return data;
                case "application/json":
                    return JSON.stringify(data);
                }
            },
            method:method,
            params:params,
            data:data,
            timeout:timeout,
            headers: headers
        }).then((response)=>{
            if(response){
                if (response.data && (response.data.error_code === 'SUCCESS' || response.data.status == 200)) {
                    resolve(response.data);
                }else if(response.data.reason == '登录失效') {
                    window.location.href = '/#/login'
                    // 统一处理token失效或者缺少
                }
                reject(response);
            }else{

                //处理特殊的情况就是response返回什么也没有
                Toast('服务器错误');//返回错误
                resolve(response);
            }
        }).catch((error)=>{
            Toast('服务异常');//返回错误
            reject(error);
        })
    })
}
