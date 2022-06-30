import React from "react"
import { Menu } from "antd"
import { useNavigate} from "react-router-dom"


export default function MenuCom(props) {
    const navigate = useNavigate()
    function changeRouter(e) {
        navigate(e.key)
    }
    return (
        <Menu
            defaultSelectedKeys={'/layout/page1'}
            theme={props.theme}
            items={props.showMenuList}
            style={props.menuStyle}
            mode={props.mode}
            onSelect= {(e) => changeRouter(e)}
        />
    )
}