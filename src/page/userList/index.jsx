import React from "react"
import { Input, Button } from "antd"
export default function Page1(props) {
    console.log(props)
    return (
        <div>
            <div>
                <Input placeholder="用户名" style={{maxWidth: 200}} />
                <Button type="primary" round style={{marginLeft: 20}}>搜索</Button>
                <Button type="primary" round style={{marginLeft: 20}}>添加</Button>
            </div>
        </div>
    )
}