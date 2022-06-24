import React from "react"
// import { Provider } from 'react-redux'
import Routers from './router'
// import store from './store'
import { ConfigProvider } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from '/node_modules/antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
function App() {
  return (
    <ConfigProvider locale={zhCN}>
   {/* <Provider store={store}> */}
      <Routers />
     {/* </Provider> */}
    </ConfigProvider>
  )
}

export default App;
