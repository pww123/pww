// 路由配置文件
let routes = [
]
routes.push(
    {
    path:'/',
    name:'index',
    meta:{
        authorize:false
    },
    component:()=>import(`@/views/index`)

});


// 404 页面
routes.push({
    path: '*',
    name: '404',
    component: () => import(
        `@/views/404`
    )
})

export default routes
