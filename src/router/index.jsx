import React, { useEffect } from "react"
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink
} from "react-router-dom"
import Home from '../component/Home'
import Features from '../component/Features'
import Test from '../component/Test'
import Page1 from '../component/Page1'
import Page2 from '../component/Page2'
import Page3 from '../component/Page3'
import NotFound from '../component/NotFound'
import Login from '../component/Login'

/** 组件 **/
export default function Routers(props) {
  // 在组件加载完毕后触发
  useEffect(() => {
    // 可以手动在此预加载指定的模块：
    // Features.preload(); // 预加载Features页面
    // Test.preload(); // 预加载Test页面
    // 也可以直接预加载所有的异步模块
    // Loadable.preloadAll();
  }, []);

  /** 简单权限控制 路由守卫 **/
  function onEnter(Component) {
    // 例子：如果没有登录，直接跳转至login页
    // if (sessionStorage.getItem('userInfo')) {
    //   return Component;
    // } else {
    //   return <Redirect to='/login' />;
    // }
    return Component
  }

  return (
    <div>
      <Router>
        <div className="container">
          <div className="navClassName">
            <NavLink className="linkName" to='/'><span>login</span></NavLink>
            <NavLink className="linkName" to='/home'><span>useState</span></NavLink>
            <NavLink className="linkName" to='/features'><span>features</span></NavLink>
            <NavLink className="linkName" to='/test'><span>test</span></NavLink>
            <NavLink className="linkName" to='/page1'><span>page1</span></NavLink>
            <NavLink className="linkName" to='/page2'><span>page2</span></NavLink>
            <NavLink className="linkName" to='/page3'><span>page3</span></NavLink>
          </div>
          <div className="menuClassName">
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/login" element={onEnter(<Login />)} />
              <Route path="/home" element={onEnter(<Home />)} />
              <Route path="/features" element={onEnter(<Features />)} />
              <Route path="/test" element={onEnter(<Test />)} />
              <Route path="/page1" element={onEnter(<Page1 />)} />
              <Route path="/page2" element={onEnter(<Page2 />)} />
              <Route path="/page3" element={onEnter(<Page3 />)} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}