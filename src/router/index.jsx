import React, { Suspense } from "react"
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { Spin } from 'antd'
import RoutersList from './staticRouter'
function routerCom(value) {
  if (value.routes) {
    return (
      <Route key={value.path} path={value.path}>
        <value.component>
          {value.routes.map(item => {
            return routerCom(item)
          })
          }
        </value.component>
      </Route>
    )
  } else {
    return (
      <Route key={value.path} path={value.path} exact={value.exact} element={<value.component />} />
    )
  }
}
/** 组件 **/
export default function Routers() {
  return (
    <Router>
      <Suspense fallback={<Spin tip="loading..." />}>
        <Routes>
          <Route path='/' element={<Navigate to='/login' replace={true} />} />
          {RoutersList.map(item => {
            return routerCom(item)
          })}
          <Route path='*' element={<Navigate to='/error' replace={true} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}