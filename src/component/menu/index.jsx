import React, {useState} from "react"
import { Menu } from "antd"
import { useNavigate, useLocation } from "react-router-dom"


export default function MenuCom(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const defaultSelectedKeys = location.pathname
    const defaultOpenKeys = defaultSelectedKeys.split('/').length > 2 ? '/' + defaultSelectedKeys.split('/')[1] : defaultSelectedKeys
    const [openKey, setOpenKey] = useState([defaultOpenKeys])
    function changeRouter(e) {
        navigate(e.key)
    }
    function changeOpenChange(e) {
        if(e.length !== 0) {
            setOpenKey([e[1]])
        } else {
            setOpenKey([''])
        }
    }
    return (
        <Menu
            defaultOpenKeys = {defaultOpenKeys}
            defaultSelectedKeys = {defaultSelectedKeys}
            openKeys = {openKey}
            theme={props.theme}
            items={props.showMenuList}
            style={props.menuStyle}
            mode={props.mode}
            onSelect= {(e) => changeRouter(e)}
            onOpenChange={(e) => changeOpenChange(e)}
        />
    )
}