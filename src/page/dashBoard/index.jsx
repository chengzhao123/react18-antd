import React from "react"
import { Outlet } from "react-router-dom"
import MenuCom from '../../component/menu'
export default function DashBoard() {
    return (
        <div>
            <MenuCom theme="dark" mode="inline" menuStyle={{width: 256}} />
            {/** 子路由界面 */}
            <Outlet/>
        </div>
    )   
}