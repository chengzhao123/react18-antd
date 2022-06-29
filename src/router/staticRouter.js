import {
    lazy
} from 'react'
const staticRouter = [{
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
        path: '/layout',
        component: lazy(() => import('../page/dashBoard')),
        exact: false,
        hidden: false,
        title: '主页',
        children: [
            {
                path: '/layout',
                redirect: '/layout/page1',
                exact: true,
                hidden: true,
                title: '页面一',
            },
            {
                path: 'page1',
                component: lazy(() => import('../page/page1')),
                exact: false,
                hidden: false,
                title: '页面一',
            },
            {
                path: 'page2',
                component: lazy(() => import('../page/page2')),
                exact: false,
                hidden: false,
                title: '页面二',
            },
            {
                path: 'page3',
                component: lazy(() => import('../page/page3')),
                exact: false,
                hidden: false,
                title: '页面三',
            }
        ]
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