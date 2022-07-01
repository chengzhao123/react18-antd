import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Layout } from 'antd'
import MenuCom from '../../component/menu'
import Nav from '../../component/nav'
import waveRouter from "../../router/waveRouter"
import logo from '../../logo.svg'
import MyLoading from "../../component/loading"
const { Header, Sider, Content } = Layout
function getMenuList(list, arr) {
    list.map(itemOne => {
        if (!itemOne.hidden) {
            if (itemOne.children && itemOne.children.length) {
                arr.push({ key: itemOne.path, label: itemOne.title, children: [] })
                return getMenuList(itemOne.children, arr[arr.length - 1].children)
            }
            return arr.push({ key: itemOne.path, label: itemOne.title })
        }
        return arr
    })
    return arr
}
export default function DashBoard() {
    let showMenuList = getMenuList(waveRouter, [])
    return (
        <Layout style={{ height: document.documentElement.clientHeight }}>
            <Sider width={256}>
                <div className="menuLogoDiv">
                    <img src={logo} alt="" />
                    <span>Ant Design</span>
                </div>
                <MenuCom
                    theme="dark"
                    mode="inline"
                    menuStyle={{ width: 256, height: document.documentElement.clientHeight - 60, overflowY: 'scroll' }}
                    showMenuList={showMenuList}
                />
            </Sider>
            <Layout>
                <Header className="navDiv">
                    <Nav/>
                </Header>
                <Layout>
                    <Content className="contentDiv">
                        <Suspense fallback={<MyLoading/>}>
                            <Outlet />
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}