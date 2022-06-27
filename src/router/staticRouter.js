import {lazy} from 'react'
const RoutersList =  [
    {
        path: '/login',
        component: lazy(() => import('../component/Login')),
        exact: false
    },
    {
        path: '/layout',
        component: lazy(() => import('../component/Home')),
        exact: false
    },
    {
        path: '/error',
        component: lazy(() => import('../component/NotFound')),
        exact: false
    }
]
export default RoutersList