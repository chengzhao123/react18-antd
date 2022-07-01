import React, {useState} from "react"
import { Menu } from "antd"
import { useNavigate} from "react-router-dom"


export default function MenuCom(props) {
    const navigate = useNavigate()
    const [openKey, setOpenKey] = useState([''])
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