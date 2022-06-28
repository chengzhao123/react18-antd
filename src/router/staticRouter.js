import {
    lazy
} from 'react'
const staticRouter = [
    {
        path: '/',
        redirect: '/login',
        exact: true
    },
    {
        path: '/login',
        component: lazy(() => import('../component/Login')),
        exact: true
    },
    {
        path: '/layout',
        component: lazy(() => import('../component/Home')),
        exact: false,
        routes:[
            {
                path:'page1',
                component: lazy(() => import('../component/Page1')),
                exact: false
            },
            {
                path:'page2',
                component: lazy(() => import('../component/Page2')),
                exact: false
            },
            {
                path:'page3',
                component: lazy(() => import('../component/Page3')),
                exact: false
            }
        ]
    },
    {
        path: '*',
        component: lazy(() => import('../component/NotFound')),
        exact: true
    }
]
export default staticRouter