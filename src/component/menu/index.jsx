import React, { useState } from "react"
import { Menu, Button } from "antd"
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import staticRouter from "../../router/staticRouter"
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


export default function MenuCom(props) {
    const [collapsed, setCollapsed] = useState(false)
    let showMenuList = getMenuList(staticRouter, [])
    function toggleCollapsed() {
        setCollapsed(!collapsed)
    }
    return (
        <div className="menuClassName">
            <Button type="primary" onClick={() => toggleCollapsed()} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                theme={props.theme}
                items={showMenuList}
                style={props.menuStyle}
                mode={props.mode}
            />
        </div>
    )
}