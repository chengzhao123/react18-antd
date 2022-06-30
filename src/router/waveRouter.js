import {
    lazy
} from 'react'
let DashBoard = lazy(() => import('../page/dashBoard')) //父节点路由
let userList = lazy(() => import('../page/userList')) //用户列表
let userManager = lazy(() => import('../page/userManager')) //用户列表
//动态路由
const waveRouter = [
    {
        path: '/user', //路径
        component: DashBoard, //组件
        exact: false, //精确匹配
        hidden: false, //隐藏目录
        title: '用户管理', //菜单名字
        children: [
            {
                path: '/user',
                redirect: '/user/userList', //重定向
                exact: true,
                hidden: true,
                title: '用户列表',
            },
            {
                path: '/user/userList',
                component: userList,
                exact: false,
                hidden: false,
                title: '用户列表',
            },
            {
                path: '/user/userManager',
                component: userManager,
                exact: false,
                hidden: false,
                title: '用户管理',
            }
        ]
    },
    {
        path: '/auth', //路径
        component: DashBoard, //组件
        exact: false, //精确匹配
        hidden: false, //隐藏目录
        title: '权限管理', //菜单名字
        children: [
            {
                path: '/auth',
                redirect: '/auth/authList', //重定向
                exact: true,
                hidden: true,
                title: '权限列表',
            },
            {
                path: '/auth/authList',
                component: userList,
                exact: false,
                hidden: false,
                title: '权限列表',
            },
            {
                path: '/auth/authManager',
                component: userList,
                exact: false,
                hidden: false,
                title: '权限管理',
            }
        ]
    },
    {
        path: '/shop', //路径
        component: DashBoard, //组件
        exact: false, //精确匹配
        hidden: false, //隐藏目录
        title: '商品管理', //菜单名字
        children: [
            {
                path: '/shop',
                redirect: '/shop/shopList', //重定向
                exact: true,
                hidden: true,
                title: '商品列表',
            },
            {
                path: '/shop/shopList',
                component: userList,
                exact: false,
                hidden: false,
                title: '商品列表',
            },
            {
                path: '/shop/shopManager',
                component: userList,
                exact: false,
                hidden: false,
                title: '商品管理',
            }
        ]
    },
    {
        path: '/order', //路径
        component: DashBoard, //组件
        exact: false, //精确匹配
        hidden: false, //隐藏目录
        title: '订单管理', //菜单名字
        children: [
            {
                path: '/order',
                redirect: '/order/orderList', //重定向
                exact: true,
                hidden: true,
                title: '订单列表',
            },
            {
                path: '/order/orderList',
                component: userList,
                exact: false,
                hidden: false,
                title: '订单列表',
            },
            {
                path: '/order/orderManager',
                component: userList,
                exact: false,
                hidden: false,
                title: '订单管理',
            }
        ]
    },
    {
        path: '/data', //路径
        component: DashBoard, //组件
        exact: false, //精确匹配
        hidden: false, //隐藏目录
        title: '数据管理', //菜单名字
        children: [
            {
                path: '/data',
                redirect: '/data/dataList', //重定向
                exact: true,
                hidden: true,
                title: '数据列表',
            },
            {
                path: '/data/dataList',
                component: userList,
                exact: false,
                hidden: false,
                title: '数据列表',
            },
            {
                path: '/data/dataManager',
                component: userList,
                exact: false,
                hidden: false,
                title: '数据管理',
            }
        ]
    }
]
export default waveRouter