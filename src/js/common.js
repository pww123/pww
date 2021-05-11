
//获取token的方法
import Cookies from 'js-cookie'

export function getToken() {

    let token
    if(Cookies.get('token')) {
        token = Cookies.get('token')
    }else{
        let tempStr = window.location.href
        let tempArr = tempStr.split('?')[1] ? tempStr.split('?')[1].split('&') : [];
        let returnArr = {}
        tempArr.forEach(element => {
            returnArr[element.split('=')[0]] = element.split('=')[1]
        })
        token = returnArr.token;
    }
    return token
}
// 获取get参数, 同时支持锚点后面的query参数
export function getQueryString (name) {
    let params = []
    let search = [window.location.search.split('?')[1] || '', window.location.hash.split('?')[1] || ''].join('&')
    search.split('&').forEach(function (el, index) {
        if (el === '') return
        let d = el.split('=')
        params[d[0]] = decodeURIComponent(d[1])
    })
    search = null
    return name ? params[name] || null : params
}

//转化日期将2020/07/29转化为07.29
export function getDate(dateQuery) {
    let dateStr = '',newDateArr = []
    let dateArr = dateQuery.split('/')
    for(let i=1;i<dateArr.length;i++){

        let targetStr = dateArr[i]

        if(targetStr.indexOf(0) == 0 ){//在第一位检查到0 删除0  07
            newDateArr.push(targetStr[1])
        }else{//在最后一位检查到0
            newDateArr.push(targetStr)
        }
    }
    dateStr = newDateArr.join('.')
    return dateStr
}
