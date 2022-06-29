import React, { Suspense } from "react"
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { Spin } from 'antd'
import staticRouter from './staticRouter'
function routerCom(value) {
  //如果存在重定向路由
  if (value.redirect) {
    return (
      <Route path={value.path} key={value.path} exact={value.exact} element={
        <Navigate to={value.redirect} replace={true} />} />
    )
  }
  //如果存在子路由
  if (value.children) {
    return (
      <Route key={value.path} path={value.path} exact={value.exact} element={<value.component />}>
        {
          value.children.map(item => {
            return routerCom(item)
          })
        }
      </Route>
    )
  }
  //不存在重定向和子路由
  return (
    <Route key={value.path} path={value.path} exact={value.exact} element={<value.component />} />
  )
}
/** 组件 **/
export default function Routers() {
  return (
    <Router>
      <Suspense fallback={<div className="routerSpin"><Spin tip="loading..." /></div>}>
        <Routes>
          {
            staticRouter.map(item => {
              return routerCom(item)
            })
          }
        </Routes>
      </Suspense>
    </Router>
  );
}