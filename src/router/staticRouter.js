import {
    lazy
} from 'react'
//静态路由
const staticRouter = [
    {
        path: '/', //路径
        redirect: '/login', //重定向
        exact: true, //精确匹配
        hidden: true, //隐藏目录
        title: '首页' //菜单名字
    },
    {
        path: '/login',
        component: lazy(() => import('../page/login')),
        exact: true,
        hidden: false,
        title: '登录'
    },
    {
        path: '*',
        component: lazy(() => import('../component/notFound')),
        exact: true,
        hidden: true,
        title: '404',
    }
]
export default staticRouter